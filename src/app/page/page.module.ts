import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './component/page/page.component';
import { MemberCardComponent } from './component/member-card/member-card.component';

@NgModule({
  declarations: [
    PageComponent,
    MemberCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageComponent,
    MemberCardComponent,
  ]
})
export class PageModule { }
