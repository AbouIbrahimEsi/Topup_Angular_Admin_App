import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ChipsComponent } from './chips/chips.component';
import { ChipsAlertsComponent } from './chips-alerts/chips-alerts.component';
import { OffersComponent } from './offers/offers.component';
import { OffersAlertsComponent } from './offers-alerts/offers-alerts.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { ChipsStatusComponent } from './chips-status/chips-status.component';
import { ChipsResponsesComponent } from './chips-responses/chips-responses.component';
import { TransactionsCommandsComponent } from './transactions-commands/transactions-commands.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
