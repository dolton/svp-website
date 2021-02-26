import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthVasaiComponent } from './south-vasai.component';

describe('SouthVasaiComponent', () => {
  let component: SouthVasaiComponent;
  let fixture: ComponentFixture<SouthVasaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthVasaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthVasaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
