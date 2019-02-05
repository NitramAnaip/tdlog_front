import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ExercicePage } from './Exercice.page';

describe('CoursPage', () => {
  let component: ExercicePage;
  let fixture: ComponentFixture<ExercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
