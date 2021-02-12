import { TestBed } from '@angular/core/testing';

import { ImdbApiService } from './imdb-api.service';

describe('ImdbApiService', () => {
  let service: ImdbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of movies based on user input in json form', () => {
    expect(service.getMovies('avengers').Search).toBeTruthy();
  });

  it('should not return any movie if the keyword is not a part of any movie\'s title', () => {
    expect(service.getMovies('qsx').Search).toBeFalsy();
  });
});
