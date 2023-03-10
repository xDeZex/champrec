import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRecComponent } from './display-rec.component';

describe('DisplayRecComponent', () => {
  let component: DisplayRecComponent;
  let fixture: ComponentFixture<DisplayRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
