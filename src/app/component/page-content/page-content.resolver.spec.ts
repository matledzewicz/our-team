import { TestBed } from '@angular/core/testing';

import { PageContentResolver } from './page-content.resolver';
import { PageContentService, PageElement } from 'src/app/api/page-content';
import { of } from 'rxjs';

describe('PageContentResolver', () => {
  let resolver: PageContentResolver;
  let pageContentService: jasmine.SpyObj<PageContentService>;

  beforeEach(() => {
    pageContentService = jasmine.createSpyObj('PageContentService', ['getContent']);
    pageContentService.getContent.and.returnValue(of({ data: [] }));

    TestBed.configureTestingModule({
      providers: [
        { provide: PageContentService, useValue: pageContentService },
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
});
