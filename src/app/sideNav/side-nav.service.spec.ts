import { TestBed, inject } from '@angular/core/testing';

import { SideNavService } from './side-nav.service';

describe('SideNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideNavService]
    });
  });

  it('should ...', inject([SideNavService], (service: SideNavService) => {
    expect(service).toBeTruthy();
  }));
});
