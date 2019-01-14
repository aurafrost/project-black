import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { ContentComponent } from './pages/content/content.component';

import { FaqComponent } from './pages/faq/faq.component';
import { ErrComponent } from './err/err.component';

const routes: Routes = [
{path: '', component: AboutComponent},
{path: 'about', component: AboutComponent},
{path: 'account', component: AccountComponent},
{path: 'content', component: ContentComponent},
{path: 'faq', component: FaqComponent},
{path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

