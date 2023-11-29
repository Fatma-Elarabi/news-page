import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsBannerComponent } from './highlights-banner.component';

describe('HighlightsBannerComponent', () => {
  let component: HighlightsBannerComponent;
  let fixture: ComponentFixture<HighlightsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
