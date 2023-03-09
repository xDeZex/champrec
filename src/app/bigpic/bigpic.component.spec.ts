import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigpicComponent } from './bigpic.component';

describe('BigpicComponent', () => {
  let component: BigpicComponent;
  let fixture: ComponentFixture<BigpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigpicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
