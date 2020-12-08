import { Component } from '@angular/core';
import { PageContentService } from './api/page-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'our-team';

  constructor(private pageContentService: PageContentService) {
    this.pageContentService.getContent().subscribe((a) => console.log(a));
  }
}
