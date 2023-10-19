import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdeleteComponent } from './studentdelete.component';

describe('StudentdeleteComponent', () => {
  let component: StudentdeleteComponent;
  let fixture: ComponentFixture<StudentdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentdeleteComponent]
    });
    fixture = TestBed.createComponent(StudentdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
