import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { AccountComponent } from './pages/account/account.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContentComponent } from './pages/content/content.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { SearchComponent } from './shared/search/search.component';
import {AuthGuard} from './core/guard/auth.guard';
import {AuthService} from './core/services/auth/auth.service';
import {UserService} from './core/services/user/user.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatRadioModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ErrComponent } from './err/err.component';
import { SignUpComponent } from './shared/forms/sign-up/sign-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeAboutComponent } from './pages/home/home-about/home-about.component';
import { HomeSliderComponent } from './pages/home/home-slider/home-slider.component';
import { ExploreComponent } from './pages/explore/explore.component';
import {SignInComponent} from './shared/dialog/sign-in/sign-in.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { RobertdowneyComponent } from './robertdowney/robertdowney.component';
import { JayzComponent } from './jayz/jayz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginRegisterComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SupportComponent,
    AccountComponent,
    TermsComponent,
    ContentComponent,
    FaqComponent,
    ForgotpasswordComponent,
    SearchComponent,
    ErrComponent,
    SignUpComponent,
    SignInComponent,
    HomeAboutComponent,
    HomeSliderComponent,
    ExploreComponent,
    RobertdowneyComponent,
    JayzComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    NgxPaginationModule,
    SlideshowModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService
  ],
  entryComponents: [SignInComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
