import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ErrComponent } from './err/err.component';
import { SupportComponent } from './pages/support/support.component';
import { TermsComponent } from './pages/terms/terms.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './shared/search/search.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { Personality2Component} from './pages/personality2/personality2.component';
import { TestDisplayComponent } from './test-firebase-subactivity/test-display/test-display.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import {ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';
import {AuthGuard} from './core/guard/auth.guard';
import { LchartComponent } from './Analytics/lchart/lchart.component';
import {Explore2Component} from './pages/explore2/explore2.component';
import {SubscribeGuard} from './core/guard/subscribe.guard';
import {FeedComponent} from './pages/feed/feed.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'cart', component: ShoppingCartComponent},
{path: 'about', component: AboutComponent},
{path: 'account', component: AccountComponent},
{path: 'content', component: FeedComponent},
{path: 'faq', component: FaqComponent},
{path: 'support', component: SupportComponent},
{path: 'terms', component: TermsComponent},
{path: 'login-register', component: LoginRegisterComponent},
{path: 'profile/:id', component: Personality2Component, canActivate: [SubscribeGuard]},
{path: 'explore', component: Explore2Component},
{path: 'search', component: SearchComponent, pathMatch: 'prefix', canActivate: [AuthGuard]},
{path: 'forgotpassword', component: ForgotpasswordComponent},
{path: 'analytics', component: LchartComponent},
{path: 'testDisplay', component: TestDisplayComponent},
{path: 'organization', component: OrganizationComponent},
{path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

