import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhototextLeftphotoComponent } from './phototext-leftphoto.component';

describe('PhototextLeftphotoComponent', () => {
  let component: PhototextLeftphotoComponent;
  let fixture: ComponentFixture<PhototextLeftphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhototextLeftphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhototextLeftphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
