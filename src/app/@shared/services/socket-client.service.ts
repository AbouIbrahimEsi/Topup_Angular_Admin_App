import { Injectable } from '@angular/core';

const port = 8080;
const host = 'localhost';
const net = require('net');

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {
  static Token: string;
  static Connected: boolean;

  constructor() { }

  connect(IpAdress: string, port: number) {
    var client = new net.Socket();
    client.connect(port, host, function() {
      console.log('Connected');
    });
    return client
  }

  getRequest (req: string) {
    var client = new net.Socket();
    client.connect(port, host, function() {
      client.write(req);
      client.on('data', function(data) {
        console.log('Received: ' + data);
        client.destroy(); // kill client after server's response
      }); 
    });
    client.on('close', function() {
      console.log('Connection closed');
    });
  }

  postRequest (req: string) {
    var client = new net.Socket();
    client.connect(port, host, function() {
      client.write(req);
      client.destroy(); // kill client after server's response 
    });
    client.on('close', function() {
      console.log('Connection closed');
    });
  }

}
