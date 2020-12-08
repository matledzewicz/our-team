import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { noop } from 'rxjs';
import { PageContentService } from './page-content.service';

describe('PageContentService', () => {
  let sut: PageContentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PageContentService],
    });

    sut = TestBed.inject(PageContentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('has getContent method, which', () => {
    it('should call httpClient.get', () => {
      sut.getContent().subscribe(noop);

      const req = httpMock.expectOne('task/index.json');
      expect(req.request.method).toBe('GET');

      req.flush({}); // FIXME: Use real model here
    });

    it('should return correct response', (done: DoneFn) => {
      sut.getContent().subscribe((response: any) => { // FIXME: Add type
        expect(response).toEqual({});
        done();
      });

      const req = httpMock.expectOne('task/index.json');

      req.flush({}); // FIXME: Use real model here
    });

    it('should also works like a callback', () => {
      const callback = sut.getContent;

      callback().subscribe(noop);

      const req = httpMock.expectOne('task/index.json');
      expect(req.request.method).toBe('GET');

      req.flush({}); // FIXME: Use real model here
    });
  });
});
