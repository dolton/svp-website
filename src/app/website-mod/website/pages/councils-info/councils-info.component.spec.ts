import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilsInfoComponent } from './councils-info.component';

describe('CouncilsInfoComponent', () => {
  let component: CouncilsInfoComponent;
  let fixture: ComponentFixture<CouncilsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouncilsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
