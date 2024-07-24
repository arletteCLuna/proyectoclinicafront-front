/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AvisoprivacidadpublicoComponent } from './avisoprivacidadpublico.component';

describe('AvisoprivacidadpublicoComponent', () => {
  let component: AvisoprivacidadpublicoComponent;
  let fixture: ComponentFixture<AvisoprivacidadpublicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoprivacidadpublicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoprivacidadpublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
