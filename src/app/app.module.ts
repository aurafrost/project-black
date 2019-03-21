import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { AccountComponent } from './pages/account/account.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContentComponent } from './pages/personality2/content/content.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SearchComponent } from './shared/search/search.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthService } from './core/services/auth/auth.service';
import { UserService } from './core/services/user/user.service';
import { ImageService } from './core/services/image/image.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatRadioModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ErrComponent } from './err/err.component';
import { SignUpComponent } from './shared/forms/sign-up/sign-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeAboutComponent } from './pages/home/home-about/home-about.component';
import { SignInComponent } from './shared/dialog/sign-in/sign-in.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { ImageComponent } from './upload/image/image.component';
import { VerifyEmailComponent } from './shared/forms/verify-email/verify-email.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomeSlideshow2Component } from './pages/home/home-slideshow2/home-slideshow2.component';
import { CalendarComponent } from './pages/personality2/calendar/calendar.component';
import { TestDisplayComponent } from './test-firebase-subactivity/test-display/test-display.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeSlider2Component } from './pages/home/home-slideshow2/zb-home-slider2/home-slider2.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { TestShopComponent } from './pages/shopping-cart/test-shop/test-shop.component';
import { ProductDialogComponent } from './pages/personality2/shopping-list/product-dialog/product-dialog.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { SubscriptionService } from './core/services/sub/subscription.service';
import { ChatComponent } from './shared/chat/chat.component';
import { ProductService } from './core/services/product/product.service';
import { LchartComponent } from './Analytics/lchart/lchart.component';
import { BarChartComponent } from './Analytics/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ShoppingListComponent } from './pages/personality2/shopping-list/shopping-list.component';
import { Personality2Component } from './pages/personality2/personality2.component';
import { Explore2Component } from './pages/explore2/explore2.component';
import { NewsComponent } from './pages/personality2/news/news.component';
import { SubscribeBtnComponent } from './shared/buttons/subscribe-btn/subscribe-btn.component';
import { SubscribeGuard } from './core/guard/subscribe.guard';
import { PostDialogComponent } from './pages/personality2/content/post-dialog/post-dialog.component';
import { FeedComponent } from './pages/feed/feed.component';
import { CalendarHeaderComponent } from './pages/personality2/calendar/calendar.utils/calendar-header-component';
import { CartItemComponent } from './pages/shopping-cart/cart-item/cart-item.component';
import { LikeBtnComponent } from './shared/buttons/like-btn/like-btn.component';
import { LikesService } from './core/services/likes/likes.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    VerifyEmailComponent,
    FormUploadComponent,
    ListUploadComponent,
    HomeSlideshow2Component,
    ImageComponent,
    DetailsUploadComponent,
    CalendarComponent,
    HomeSlider2Component,
    TestDisplayComponent,
    OrganizationComponent,
    ShoppingCartComponent,
    TestShopComponent,
    ProductDialogComponent,
    ChatComponent,
    LchartComponent,
    BarChartComponent,
    ShoppingListComponent,
    Personality2Component,
    Explore2Component,
    NewsComponent,
    PostDialogComponent,
    FeedComponent,
    CalendarHeaderComponent,
    CartItemComponent,
    LikeBtnComponent,
    SubscribeBtnComponent,
  ],
  imports: [
    MatGridListModule,
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
    ChartsModule
  ],
  providers: [
    AngularFireStorage,
    AuthGuard,
    SubscribeGuard,
    ProductService,
    AuthService,
    UserService,
    ImageService,
    LikesService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    SubscriptionService
  ],
  entryComponents: [SignInComponent, ProductDialogComponent, PostDialogComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
