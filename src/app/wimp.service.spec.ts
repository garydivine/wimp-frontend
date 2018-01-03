import { TestBed, inject } from '@angular/core/testing';

import { WimpService } from './wimp.service';

describe('WimpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WimpService]
    });
  });

  it('should be created', inject([WimpService], (service: WimpService) => {
    expect(service).toBeTruthy();
  }));
});
