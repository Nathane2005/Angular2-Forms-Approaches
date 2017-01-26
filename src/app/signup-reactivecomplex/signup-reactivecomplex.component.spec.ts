/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignupReactivecomplexComponent } from './signup-reactivecomplex.component';

describe('SignupReactivecomplexComponent', () => {
  let component: SignupReactivecomplexComponent;
  let fixture: ComponentFixture<SignupReactivecomplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupReactivecomplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupReactivecomplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
