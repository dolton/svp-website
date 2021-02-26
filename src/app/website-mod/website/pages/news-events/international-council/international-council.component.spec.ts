import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalCouncilComponent } from './international-council.component';

describe('InternationalCouncilComponent', () => {
  let component: InternationalCouncilComponent;
  let fixture: ComponentFixture<InternationalCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalCouncilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
