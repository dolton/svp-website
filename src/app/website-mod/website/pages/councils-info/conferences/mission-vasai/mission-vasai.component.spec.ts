import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVasaiComponent } from './mission-vasai.component';

describe('MissionVasaiComponent', () => {
  let component: MissionVasaiComponent;
  let fixture: ComponentFixture<MissionVasaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionVasaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionVasaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
