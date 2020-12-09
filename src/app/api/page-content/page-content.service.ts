import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageElement } from './models';
import { ApiResponse } from '../api-response';

@Injectable()
export class PageContentService {
  constructor(private http: HttpClient) { }

  public getContent = (): Observable<ApiResponse<PageElement[]>> => {
    return this.http.get<ApiResponse<PageElement[]>>('task/index.json');
  }
}
