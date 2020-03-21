import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

export interface TempStructureLine {
  modem: string;
  port: number;
  cimi: number;
  number: string;
  status: string;
  currentTransactions: number;
  theorCredit: string;
  realCredit: string;
  bonus: string;
  lastUpdate: string;
  description : string;
}

@Component({
  selector: 'ngx-chips-status',
  templateUrl: './chips-status.component.html',
  styleUrls: ['./chips-status.component.scss'],
  animations: [
  trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0'})),
    state('expanded', style({height: '*'})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
],
})
export class ChipsStatusComponent implements OnInit{
  //dataSource = ELEMENT_DATA;
  columnsToDisplay = ['modem', 'port', 'cimi', 'number', 'status', 'theorCredit', 'realCredit', 'bonus', 'lastUpdate'];
  expandedElement: TempStructureLine | null;

  dataSource: MatTableDataSource<TempStructureLine>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  constructor() {
    // Create 100 users
    const tempStructureLines = Array.from({length: 100}, (_, k) => createNewTempStructureLIne(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(tempStructureLines);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewTempStructureLIne(id: number): TempStructureLine {
  return {
    modem: "125",
    port: 3,
    cimi: 256124533,
    number: "0556253525",
    status: "Working",
    currentTransactions: 4,
    theorCredit: "52000.00",
    realCredit: "42000.00",
    bonus: "2300.00",
    lastUpdate: "18-03-2020",
    description: "Vous pouvez ajouter des actions sur ces colonnes"
  };
}
