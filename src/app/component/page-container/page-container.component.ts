import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PageElement } from 'src/app/api/page-content';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {
  elements$: Observable<PageElement[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.elements$ = this.route.data.pipe(map(((data => data.elements))));
  }

}
