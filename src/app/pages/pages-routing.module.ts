import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module')
        .then(m => m.ProfileModule),
    },
    {
      path: 'activation',
      loadChildren: () => import('./activation/activation.module')
        .then(m => m.ActivationModule),
    },
    {
      path: 'topup',
      loadChildren: () => import('./topup/topup.module')
        .then(m => m.TopupModule),
    },
    {
      path: 'chips-status',
      loadChildren: () => import('./chips-status/chips-status.module')
        .then(m => m.ChipsStatusModule),
    },
    {
      path: 'chips',
      loadChildren: () => import('./chips/chips.module')
        .then(m => m.ChipsModule),
    },
    {
      path: 'chips-stock',
      loadChildren: () => import('./chips-stock/chips-stock.module')
        .then(m => m.ChipsStockModule),
    },
    {
      path: 'chips-alerts',
      loadChildren: () => import('./chips-alerts/chips-alerts.module')
        .then(m => m.ChipsAlertsModule),
    },
    {
      path: 'chips-responses',
      loadChildren: () => import('./chips-responses/chips-responses.module')
        .then(m => m.ChipsResponsesModule),
    },
    {
      path: 'offers',
      loadChildren: () => import('./offers/offers.module')
        .then(m => m.OffersModule),
    },
    {
      path: 'offers-alerts',
      loadChildren: () => import('./offers-alerts/offers-alerts.module')
        .then(m => m.OffersAlertsModule),
    },
    {
      path: 'transactions-commands',
      loadChildren: () => import('./transactions-commands/transactions-commands.module')
        .then(m => m.TransactionsCommandsModule),
    },
    {
      path: 'transactions-history',
      loadChildren: () => import('./transactions-history/transactions-history.module')
        .then(m => m.TransactionsHistoryModule),
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule),
    },
    {
      path: 'roles',
      loadChildren: () => import('./roles/roles.module')
        .then(m => m.RolesModule),
    },
    {
      path: '',
      redirectTo: 'chips-status',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
