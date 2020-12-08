import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageElement } from './models';

@Injectable()
export class PageContentService {
  constructor(private http: HttpClient) { }

  public getContent = (): Observable<PageElement[]> => {
    return this.http.get<PageElement[]>('task/index.json');
  }
}
