import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotetextComponent } from './quotetext.component';

describe('QuotetextComponent', () => {
  let component: QuotetextComponent;
  let fixture: ComponentFixture<QuotetextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotetextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
