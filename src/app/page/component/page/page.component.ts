import { Component, Input } from '@angular/core';
import { PageElement } from 'src/app/api/page-content';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input() pageElement: PageElement;
}
