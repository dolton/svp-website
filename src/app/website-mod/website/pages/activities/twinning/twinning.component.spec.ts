import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinningComponent } from './twinning.component';

describe('TwinningComponent', () => {
  let component: TwinningComponent;
  let fixture: ComponentFixture<TwinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwinningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
