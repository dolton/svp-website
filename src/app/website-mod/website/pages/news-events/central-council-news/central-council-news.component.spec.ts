import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralCouncilNewsComponent } from './central-council-news.component';

describe('CentralCouncilNewsComponent', () => {
  let component: CentralCouncilNewsComponent;
  let fixture: ComponentFixture<CentralCouncilNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralCouncilNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralCouncilNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
