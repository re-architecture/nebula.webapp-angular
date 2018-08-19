import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopChartComponent } from './home-top-chart.component';

describe('HomeTopChartComponent', () => {
  let component: HomeTopChartComponent;
  let fixture: ComponentFixture<HomeTopChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
