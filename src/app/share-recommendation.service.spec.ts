import { TestBed } from '@angular/core/testing';

import { ShareRecommendationService } from './share-recommendation.service';

describe('ShareRecommendationService', () => {
  let service: ShareRecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareRecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
