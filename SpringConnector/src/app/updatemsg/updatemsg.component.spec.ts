import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemsgComponent } from './updatemsg.component';

describe('UpdatemsgComponent', () => {
  let component: UpdatemsgComponent;
  let fixture: ComponentFixture<UpdatemsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatemsgComponent]
    });
    fixture = TestBed.createComponent(UpdatemsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
