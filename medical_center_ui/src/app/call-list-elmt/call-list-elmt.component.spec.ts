import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallListElmtComponent } from './call-list-elmt.component';

describe('CallListElmtComponent', () => {
  let component: CallListElmtComponent;
  let fixture: ComponentFixture<CallListElmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallListElmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallListElmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
