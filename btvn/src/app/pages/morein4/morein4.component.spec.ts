import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Morein4Component } from './morein4.component';

describe('Morein4Component', () => {
  let component: Morein4Component;
  let fixture: ComponentFixture<Morein4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Morein4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Morein4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
