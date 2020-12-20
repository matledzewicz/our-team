import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageElement } from './models';
import { ApiResponse } from '../api-response';

export type PageContentResponse = ApiResponse<PageElement[]>;

@Injectable()
export class PageContentService {
  constructor(private http: HttpClient) { }

  public getContent = (): Observable<PageContentResponse> => {
    return this.http.get<PageContentResponse>('task/index.json');
  }
}
