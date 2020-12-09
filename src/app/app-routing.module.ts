import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContentComponent } from './component/page-content/page-content.component';
import { PageContentResolver } from './component/page-content/page-content.resolver';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: PageContentComponent,
    resolve: { elements: PageContentResolver },
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
