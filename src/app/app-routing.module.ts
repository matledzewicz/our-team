import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContainerComponent } from './component/page-container/page-container.component';
import { PageContainerResolver } from './component/page-container/page-container.resolver';

const routes: Routes = [
  {
    path: '**',
    component: PageContainerComponent,
    resolve: { elements: PageContainerResolver },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
