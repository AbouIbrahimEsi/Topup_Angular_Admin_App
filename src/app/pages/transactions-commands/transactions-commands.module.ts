import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionsCommandsComponent} from "./transactions-commands.component";
import {RouterModule, Routes} from "@angular/router";
import {NbCardModule, NbIconModule} from "@nebular/theme";
import {CdkTableModule} from "@angular/cdk/table";
import {CdkTreeModule} from "@angular/cdk/tree";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [{
  path: '',
  component: TransactionsCommandsComponent,
}];

@NgModule({
  declarations: [
    TransactionsCommandsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    /********** Nebular Modules***********/
    NbCardModule,
    NbIconModule,
    /*************************************/

    /********** Material Modules***********/
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    /*****************************************/
  ],
  exports: [
    RouterModule,
  ]
})
export class TransactionsCommandsModule { }
