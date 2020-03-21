import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { ChipsStockComponent } from './chips-stock.component';
import { StockOperatorComponent } from './stock-operator/stock-operator.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbUserModule, NbButtonModule, NbActionsModule, NbIconModule, NbSelectModule, NbListModule } from '@nebular/theme';

const routes: Routes = [{
  path: '',
  component: ChipsStockComponent,
}];

@NgModule({
  declarations: [
    ChipsStockComponent, 
    StockOperatorComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbActionsModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
  ],
  exports: [ 
    RouterModule,
    ChipsStockComponent,
  ],
})
export class ChipsStockModule { }
