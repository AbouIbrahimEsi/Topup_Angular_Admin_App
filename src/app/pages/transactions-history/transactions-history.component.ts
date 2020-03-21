import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

export interface TempStructureLine {
  id: number;
  status: string;
  idTransFinanc: number;
  clientNumber: string;
  amount: string;
  date: string;
  idSim: number;
  simNumber: string;
  amountBefore: string;
  amountAfter: string;
  type: string;
  idVendor: number;
  vendor: string;
}

@Component({
  selector: 'ngx-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionsHistoryComponent implements OnInit{
  //dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'status', 'idTransFinanc', 'clientNumber','amount','date', 'idSim',
                      'simNumber', 'amountBefore', 'amountAfter', 'type', 'idVendor', 'vendor'];
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
    id: 5,
    status: "En cours",
    idTransFinanc:  125,
    clientNumber: "0668353236",
    amount: "200.00",
    date: "19/03/2020",
    idSim:  233,
    simNumber: "0796432202",
    amountBefore: "5600.00",
    amountAfter: "5400.00",
    type: "Arsseli",
    idVendor:  310,
    vendor: "Mostafa Chaabane",
  };
}
