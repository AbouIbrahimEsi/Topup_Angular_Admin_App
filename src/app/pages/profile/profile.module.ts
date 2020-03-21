import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbUserModule, NbButtonModule, NbActionsModule, NbIconModule } from '@nebular/theme';
import { ProfileInfosCardComponent } from './profile-infos-card/profile-infos-card.component';

const routes: Routes = [{
  path: '',
  component: ProfileComponent,
}];


@NgModule({
  declarations: [
    ProfileComponent,
    StatusCardComponent,
    ProfileInfosCardComponent,
    ],
  imports: [ 
    RouterModule.forChild(routes),
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbActionsModule,
    NbIconModule,
   ],
  exports: [ 
    RouterModule,
    ProfileComponent,
  ],
})
export class ProfileModule { }
