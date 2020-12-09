import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PageElement } from 'src/app/api/page-content';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  elements$: Observable<PageElement[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.elements$ = this.route.data.pipe(map(((data => data.elements))));
  }

}
