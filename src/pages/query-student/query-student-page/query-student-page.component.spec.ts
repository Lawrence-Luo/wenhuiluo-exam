import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryStudentPageComponent } from './query-student-page.component';

describe('QueryStudentPageComponent', () => {
  let component: QueryStudentPageComponent;
  let fixture: ComponentFixture<QueryStudentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryStudentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
