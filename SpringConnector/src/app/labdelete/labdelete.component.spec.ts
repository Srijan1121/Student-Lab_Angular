import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabdeleteComponent } from './labdelete.component';

describe('LabdeleteComponent', () => {
  let component: LabdeleteComponent;
  let fixture: ComponentFixture<LabdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabdeleteComponent]
    });
    fixture = TestBed.createComponent(LabdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
