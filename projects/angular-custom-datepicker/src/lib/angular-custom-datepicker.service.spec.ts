import { TestBed } from '@angular/core/testing';

import { AngularCustomDatepickerService } from './angular-custom-datepicker.service';

describe('AngularCustomDatepickerService', () => {
  let service: AngularCustomDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCustomDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
