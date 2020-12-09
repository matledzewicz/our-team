import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from './component/member-card/member-card.component';
import { PageSectionComponent } from './component/page/page-section.component';

@NgModule({
  declarations: [
    PageSectionComponent,
    MemberCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageSectionComponent,
    MemberCardComponent,
  ]
})
export class PageModule { }
