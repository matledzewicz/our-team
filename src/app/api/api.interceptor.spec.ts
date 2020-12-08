import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';
import { noop } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('ApiInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiInterceptor,
          multi: true,
        },
      ],
    });
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should modify url with prefix from environment for GET', () => {
    httpClient.get('test').subscribe(noop);
    const url = `${environment.apiUrl}/test`;

    const req = httpMock.expectOne(url);
    expect(req.request.url).toEqual(url);
  });

  it('should modify url with prefix from environment for POST and not modify request body', () => {
    httpClient.post('test-post', { foo: 'bar' }).subscribe(noop);

    const req = httpMock.expectOne(`${environment.apiUrl}/test-post`);
    expect(req.request.body).toEqual({ foo: 'bar' });
  });
});
