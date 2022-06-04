import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';

@NgModule({
  declarations: [LoginComponent, LockComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
