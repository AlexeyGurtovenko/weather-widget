import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastShortComponent } from './daily-forecast-short.component';

describe('DailyForecastShortComponent', () => {
  let component: DailyForecastShortComponent;
  let fixture: ComponentFixture<DailyForecastShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyForecastShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyForecastShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
