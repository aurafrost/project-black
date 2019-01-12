import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, PreloadingStrategy} from '@angular/router';
import {LoginRegisterComponent} from './pages/login-register/login-register.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from './core/guard/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'login-register', component: LoginRegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
