import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ConjugaisonPage } from './Conjugaison.page';

describe('ConjugaisonPage', () => {
  let component: ConjugaisonPage;
  let fixture: ComponentFixture<ConjugaisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjugaisonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugaisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
