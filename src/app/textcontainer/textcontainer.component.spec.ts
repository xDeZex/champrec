import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcontainerComponent } from './textcontainer.component';

describe('TextcontainerComponent', () => {
  let component: TextcontainerComponent;
  let fixture: ComponentFixture<TextcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
