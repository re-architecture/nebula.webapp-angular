import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoadingProgressBarComponent } from './page-loading-progress-bar.component';

describe('PageLoadingProgressBarComponent', () => {
  let component: PageLoadingProgressBarComponent;
  let fixture: ComponentFixture<PageLoadingProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLoadingProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoadingProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
