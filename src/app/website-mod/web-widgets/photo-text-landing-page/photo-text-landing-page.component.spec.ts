import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTextLandingPageComponent } from './photo-text-landing-page.component';

describe('PhotoTextLandingPageComponent', () => {
  let component: PhotoTextLandingPageComponent;
  let fixture: ComponentFixture<PhotoTextLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoTextLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoTextLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
