import { TestBed } from '@angular/core/testing';

import { PageContentResolver } from './page-content.resolver';
import { PageContentService, PageElement } from 'src/app/api/page-content';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('PageContentResolver', () => {
  let resolver: PageContentResolver;
  let pageContentService: jasmine.SpyObj<PageContentService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    pageContentService = jasmine.createSpyObj('PageContentService', ['getContent']);
    pageContentService.getContent.and.returnValue(of({ data: [] }));

    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: PageContentService, useValue: pageContentService },
        { provide: Router, useValue: router },
      ]
    });
    resolver = TestBed.inject(PageContentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should call pageContentService.getContent method', () => {
    resolver.resolve();

    expect(pageContentService.getContent).toHaveBeenCalled();
  });

  it('should return value of data property from pageContentService.getContent', (done) => {
    const content: PageElement[] = [];
    pageContentService.getContent.and.returnValue(of({ data: content }));

    resolver.resolve().subscribe((result) => {
      expect(result).toEqual(content);
      done();
    });
  });

  it('should navigate to error page in case of error', (done) => {
    pageContentService.getContent.and.returnValue(throwError(new Error('foo')));

    resolver.resolve().subscribe(
      () => done.fail('should be error'),
      () => {
        expect(router.navigate).toHaveBeenCalledWith(['/error']);
        done();
      },
    );
  });
});
