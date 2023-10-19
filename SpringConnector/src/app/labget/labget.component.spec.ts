import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabgetComponent } from './labget.component';

describe('LabgetComponent', () => {
  let component: LabgetComponent;
  let fixture: ComponentFixture<LabgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabgetComponent]
    });
    fixture = TestBed.createComponent(LabgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
