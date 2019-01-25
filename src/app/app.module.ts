import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
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
import { SearchComponent } from './shared/search/search.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthService } from './core/services/auth/auth.service';
import { UserService } from './core/services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
import { SignInComponent } from './shared/dialog/sign-in/sign-in.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TomcruiseComponent } from './celebrities/tomcruise/tomcruise.component';
import { BeyonceComponent } from './celebrities/beyonce/beyonce.component';
import { WillemdafoeComponent } from './celebrities/willemdafoe/willemdafoe.component';
import { JayzComponent } from './celebrities/jayz/jayz.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { ImageComponent } from './upload/image/image.component';

import { ZbTestHomeComponent } from './zb-test-components/zb-test-home/zb-test-home.component';
import { ZbTestGenreComponent } from './zb-test-components/zb-test-genre/zb-test-genre.component';
import { PageNavComponent } from './zb-test-components/zb-test-home/page-nav/page-nav.component';
import { HomeTopSectionComponent } from './zb-test-components/zb-test-home/home-top-section/home-top-section.component';
import { ZbTestGenrePageComponent } from './zb-test-components/zb-test-genre-page/zb-test-genre-page.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

import { VerifyEmailComponent } from './shared/forms/verify-email/verify-email.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { NascarComponent } from './pages/categories/nascar/nascar.component';
import { TravelComponent } from './pages/categories/travel/travel.component';
import { EducationComponent } from './pages/categories/education/education.component';
import { FoodComponent } from './pages/categories/food/food.component';
import { MusicComponent } from './pages/categories/music/music.component';
import { MoviestvComponent } from './pages/categories/moviestv/moviestv.component';
import { FootballComponent } from './pages/categories/football/football.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomeSlideshow2Component } from './zb-test-components/zb-test-home/home-slideshow2/home-slideshow2.component';
import { LivenationComponent } from './pages/categories/livenation/livenation.component';
import { DiscoveryComponent } from './pages/categories/discovery/discovery.component';
import { MlbComponent } from './pages/categories/mlb/mlb.component';
import { NbaComponent } from './pages/categories/nba/nba.component';
import { MlsComponent } from './pages/categories/mls/mls.component';
import { FormulaoneComponent } from './pages/categories/formulaone/formulaone.component';
import { BollywoodComponent } from './pages/categories/bollywood/bollywood.component';
import { CricketComponent } from './pages/categories/cricket/cricket.component';
import { JackiechanComponent } from './pages/categories/jackiechan/jackiechan.component';
import { StatsComponent } from './pages/stats/stats.component';
import { CalendarComponent } from './pages/profile/calendar/calendar.component';
import { TestDisplayComponent } from './test-firebase-subactivity/test-display/test-display.component';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {ZbHomeSlider2Component} from './zb-test-components/zb-test-home/home-slideshow2/zb-home-slider2/zb-home-slider2.component';
import { ProfileContentComponent } from './pages/profile/profile-content/profile-content.component';
import { ShoppingListComponent } from './pages/profile/shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import {CartService} from './core/services/cart/cart.service';
import { CartItemComponent } from './pages/shopping-cart/cart-item/cart-item.component';


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
    JayzComponent,
    TomcruiseComponent,
    BeyonceComponent,
    WillemdafoeComponent,
    ZbTestHomeComponent,
    ZbTestGenreComponent,
    PageNavComponent,
    HomeTopSectionComponent,
    ZbTestGenrePageComponent,
    VerifyEmailComponent,
    NascarComponent,
    TravelComponent,
    EducationComponent,
    FoodComponent,
    MusicComponent,
    MoviestvComponent,
    FootballComponent,
    FormUploadComponent,
    ListUploadComponent,
    HomeSlideshow2Component,
    ImageComponent,
    DetailsUploadComponent,
    LivenationComponent,
    DiscoveryComponent,
    MlbComponent,
    NbaComponent,
    MlsComponent,
    FormulaoneComponent,
    BollywoodComponent,
    CricketComponent,
    JackiechanComponent,
    StatsComponent,
    CalendarComponent,
    ZbHomeSlider2Component,
    TestDisplayComponent,
    ProfileContentComponent,
    ShoppingListComponent,
    ShoppingCartComponent,
    CartItemComponent
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
    AngularFireModule.initializeApp(environment.firebase, 'socialapp'),
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
    SlideshowModule,
    ScrollingModule,
    SwiperModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
    NgbModalModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    CartService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  entryComponents: [SignInComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
