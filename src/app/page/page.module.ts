import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './component/page/page.component';

@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageComponent,
  ]
})
export class PageModule { }
