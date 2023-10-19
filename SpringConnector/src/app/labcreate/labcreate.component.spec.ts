import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcreateComponent } from './labcreate.component';

describe('LabcreateComponent', () => {
  let component: LabcreateComponent;
  let fixture: ComponentFixture<LabcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabcreateComponent]
    });
    fixture = TestBed.createComponent(LabcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
