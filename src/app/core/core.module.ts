import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth/auth.service';
import {AuthGuard} from './guard/auth.guard';
import {UserService} from './services/user/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService
  ]

})
export class CoreModule { }
