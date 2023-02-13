import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCustomDatepickerComponent } from './angular-custom-datepicker.component';

describe('AngularCustomDatepickerComponent', () => {
  let component: AngularCustomDatepickerComponent;
  let fixture: ComponentFixture<AngularCustomDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCustomDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCustomDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
