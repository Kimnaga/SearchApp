import { TestBed } from '@angular/core/testing';

import { GiphyService} from './giphy-search.service';

describe('GiphySearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphyService= TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });
});
