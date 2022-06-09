import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBtnComponent } from './call-btn.component';

describe('CallBtnComponent', () => {
  let component: CallBtnComponent;
  let fixture: ComponentFixture<CallBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
