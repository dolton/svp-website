import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggInstitutionComponent } from './agg-institution.component';

describe('AggInstitutionComponent', () => {
  let component: AggInstitutionComponent;
  let fixture: ComponentFixture<AggInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
