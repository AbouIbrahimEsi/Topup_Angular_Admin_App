import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort} from "@angular/material/sort";
import {UserData} from "../../@core/data/users";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

export interface TempStructureLine {
  simId: number;
  NumSim: string;
  simCimi: number;
  simCode: number;
  simCredit: string;
  operator: string;
  simType: string;
}

@Component({
  selector: 'ngx-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ChipsComponent implements OnInit{
  //dataSource = ELEMENT_DATA;
  columnsToDisplay = ['simId', 'NumSim', 'simCimi', 'simCode', 'simCredit', 'operator', 'simType'];
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
    simId:  2,
    NumSim:  "0665323252",
    simCimi:  45821365,
    simCode:  2335,
    simCredit:  "563000.00",
    operator:  "Oredoo",
    simType:  "Primaire",
  };
}
