import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextblogComponent } from './textblog.component';

describe('TextblogComponent', () => {
  let component: TextblogComponent;
  let fixture: ComponentFixture<TextblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
