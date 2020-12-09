import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PageElement, PageContentService } from 'src/app/infrastructure/page-content';
import { ApiResponse } from 'src/app/infrastructure/api-response';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageContentResolver implements Resolve<PageElement[]> {
  constructor(private pageContentService: PageContentService, private router: Router) {
  }
  resolve(): Observable<PageElement[]> {
    return this.pageContentService.getContent().pipe(
      map((response: ApiResponse<PageElement[]>) => response.data),
      catchError((error: HttpErrorResponse) => {
        this.router.navigate(['/error']);

        return throwError(error);
      }),
    );
  }
}
