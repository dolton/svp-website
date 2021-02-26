import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastVasaiComponent } from './east-vasai.component';

describe('EastVasaiComponent', () => {
  let component: EastVasaiComponent;
  let fixture: ComponentFixture<EastVasaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastVasaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastVasaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
