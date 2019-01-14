import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './register/register.component';
import { FaqComponent } from './faq/faq.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ErrComponent } from './err/err.component';

const routes: Routes = [
{path: '', component: AboutComponent},
{path: 'about', component: AboutComponent},
{path: 'account', component: AccountComponent},
{path: 'content', component: ContentComponent},
{path: 'register', component: RegisterComponent},
{path: 'faq', component: FaqComponent},
{path: 'customersupport', component: CustomersupportComponent},
{path: 'privacy', component: PrivacyComponent},
{path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
