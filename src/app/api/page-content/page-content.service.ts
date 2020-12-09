import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageElement } from './models';
import { Response } from '../response';

@Injectable()
export class PageContentService {
  constructor(private http: HttpClient) { }

  public getContent = (): Observable<Response<PageElement[]>> => {
    return this.http.get<Response<PageElement[]>>('task/index.json');
  }
}
