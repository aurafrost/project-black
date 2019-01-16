import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { ContentComponent } from './pages/content/content.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ErrComponent } from './err/err.component';
import { SupportComponent } from './pages/support/support.component';
import { TermsComponent } from './pages/terms/terms.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from "./pages/profile/profile.component";
import { ExploreComponent } from './pages/explore/explore.component';
import { SearchComponent } from './shared/search/search.component';
import { RobertdowneyComponent } from './celebrities/robertdowney/robertdowney.component';
import { BeyonceComponent } from './celebrities/beyonce/beyonce.component';
import { EvandorholyfieldComponent } from './celebrities/evandorholyfield/evandorholyfield.component';
import { JayzComponent } from './celebrities/jayz/jayz.component';
import { KanyewestComponent } from './celebrities/kanyewest/kanyewest.component';
import { TomcruiseComponent } from './celebrities/tomcruise/tomcruise.component';
import { WillemdafoeComponent } from './celebrities/willemdafoe/willemdafoe.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'account', component: AccountComponent},
{path: 'content', component: ContentComponent},
{path: 'faq', component: FaqComponent},
{path: 'support', component: SupportComponent},
{path: 'terms', component: TermsComponent},
{path: 'login-register', component: LoginRegisterComponent},
{path: 'profile', component: ProfileComponent},
{path: 'explore', component: ExploreComponent},
{path: 'search', component: SearchComponent},
{path: 'robertdowneyjr', component: RobertdowneyComponent},
{path: 'beyonce', component: BeyonceComponent},
{path: 'evanderholyfield', component: EvandorholyfieldComponent},
{path: 'jay-z', component: JayzComponent},
{path: 'kanyewest', component: KanyewestComponent},
{path: 'tomcruise', component: TomcruiseComponent},
{path: 'willemdafoe', component: WillemdafoeComponent},
{path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

