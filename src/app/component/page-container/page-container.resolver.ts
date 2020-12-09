import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageElement, PageContentService } from 'src/app/api/page-content';

@Injectable({
  providedIn: 'root'
})
export class PageContainerResolver implements Resolve<PageElement[]> {
  constructor(private pageContentService: PageContentService) {
  }
  resolve(): Observable<PageElement[]> {
    return this.pageContentService.getContent().pipe(map(response => response.data));
  }
}
