import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCouncilComponent } from './area-council.component';

describe('AreaCouncilComponent', () => {
  let component: AreaCouncilComponent;
  let fixture: ComponentFixture<AreaCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaCouncilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
