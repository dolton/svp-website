import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthVasaiComponent } from './north-vasai.component';

describe('NorthVasaiComponent', () => {
  let component: NorthVasaiComponent;
  let fixture: ComponentFixture<NorthVasaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthVasaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthVasaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
