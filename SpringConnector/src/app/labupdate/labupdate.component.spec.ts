import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabupdateComponent } from './labupdate.component';

describe('LabupdateComponent', () => {
  let component: LabupdateComponent;
  let fixture: ComponentFixture<LabupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabupdateComponent]
    });
    fixture = TestBed.createComponent(LabupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
