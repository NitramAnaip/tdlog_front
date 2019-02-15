import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { GrammairePage } from './Grammaire.page';

describe('GrammairePage', () => {
  let component: GrammairePage;
  let fixture: ComponentFixture<GrammairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammairePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
