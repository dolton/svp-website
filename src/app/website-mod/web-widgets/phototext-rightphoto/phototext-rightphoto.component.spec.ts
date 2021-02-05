import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhototextRightphotoComponent } from './phototext-rightphoto.component';

describe('PhototextRightphotoComponent', () => {
  let component: PhototextRightphotoComponent;
  let fixture: ComponentFixture<PhototextRightphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhototextRightphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhototextRightphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
