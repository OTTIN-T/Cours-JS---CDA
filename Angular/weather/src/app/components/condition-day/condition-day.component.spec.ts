import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionDayComponent } from './condition-day.component';

describe('ConditionDayComponent', () => {
  let component: ConditionDayComponent;
  let fixture: ComponentFixture<ConditionDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
