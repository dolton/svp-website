import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhototextOverlapComponent } from './phototext-overlap.component';

describe('PhototextOverlapComponent', () => {
  let component: PhototextOverlapComponent;
  let fixture: ComponentFixture<PhototextOverlapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhototextOverlapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhototextOverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
