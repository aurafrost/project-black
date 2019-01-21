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
import { BeyonceComponent } from './celebrities/beyonce/beyonce.component';
import { JayzComponent } from './celebrities/jayz/jayz.component';
import { TomcruiseComponent } from './celebrities/tomcruise/tomcruise.component';
import { WillemdafoeComponent } from './celebrities/willemdafoe/willemdafoe.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { NascarComponent } from './pages/categories/nascar/nascar.component';
import { TravelComponent } from './pages/categories/travel/travel.component';
import { EducationComponent } from './pages/categories/education/education.component';
import { FoodComponent } from './pages/categories/food/food.component';
import { MusicComponent } from './pages/categories/music/music.component';
import { MoviestvComponent } from './pages/categories/moviestv/moviestv.component';
import { FootballComponent } from './pages/categories/football/football.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ImageComponent } from './upload/image/image.component'

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'account', component: AccountComponent},
{path: 'content', component: ContentComponent},
{path: 'faq', component: FaqComponent},
{path: 'support', component: SupportComponent},
{path: 'terms', component: ImageComponent},
{path: 'login-register', component: LoginRegisterComponent},
{path: 'profile', component: ProfileComponent},
{path: 'explore', component: ExploreComponent},
{path: 'search', component: SearchComponent},
{path: 'beyonce', component: BeyonceComponent},
{path: 'jay-z', component: JayzComponent},
{path: 'tomcruise', component: TomcruiseComponent},
{path: 'willemdafoe', component: WillemdafoeComponent},
{path: 'forgotpassword', component: ForgotpasswordComponent},
{path: 'nascar', component: NascarComponent},
{path: 'travel', component: TravelComponent},
{path: 'education', component: EducationComponent},
{path: 'food', component: FoodComponent},
{path: 'music', component: MusicComponent},
{path: 'moviestv', component: MoviestvComponent},
{path: 'football', component: FootballComponent},
{path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

