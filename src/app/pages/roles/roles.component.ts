import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

export interface TempStructureLine {
  id: number;
  roleName: string;
  functionalities: string;
}

@Component({
  selector: 'ngx-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RolesComponent implements OnInit{
  //dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'roleName', 'functionalities'];
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
    id: 123,
    roleName: "Décideur",
    functionalities: "Activation, Rechargement, Etats"
  };
}
