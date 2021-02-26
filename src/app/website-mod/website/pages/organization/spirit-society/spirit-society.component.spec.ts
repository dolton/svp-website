import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritSocietyComponent } from './spirit-society.component';

describe('SpiritSocietyComponent', () => {
  let component: SpiritSocietyComponent;
  let fixture: ComponentFixture<SpiritSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
