import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChipsStatusComponent } from './chips-status.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTreeModule} from "@angular/material/tree";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSortModule} from "@angular/material/sort";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatChipsModule} from "@angular/material/chips";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatSliderModule} from "@angular/material/slider";
import {MatBadgeModule} from "@angular/material/badge";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {CdkTableModule} from "@angular/cdk/table";
import {CdkTreeModule} from "@angular/cdk/tree";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NbCardModule, NbIconModule} from "@nebular/theme";


const routes: Routes = [{
  path: '',
  component: ChipsStatusComponent,
}];

@NgModule({
  declarations: [
    ChipsStatusComponent,
  ],
  imports: [
    /*BrowserModule,*/
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
    ChipsStatusComponent,
  ],
})
export class ChipsStatusModule { }
