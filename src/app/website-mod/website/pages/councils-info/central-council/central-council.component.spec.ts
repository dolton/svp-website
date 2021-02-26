import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralCouncilComponent } from './central-council.component';

describe('CentralCouncilComponent', () => {
  let component: CentralCouncilComponent;
  let fixture: ComponentFixture<CentralCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralCouncilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
