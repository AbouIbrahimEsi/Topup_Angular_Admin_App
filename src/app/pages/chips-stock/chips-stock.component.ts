import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'ngx-chips-stock',
  templateUrl: './chips-stock.component.html',
  styleUrls: ['./chips-stock.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ChipsStockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
