import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMajorsComponent } from './study-majors.component';

describe('StudyMajorsComponent', () => {
  let component: StudyMajorsComponent;
  let fixture: ComponentFixture<StudyMajorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyMajorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyMajorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
