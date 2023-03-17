import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCreationComponent } from './alert-creation.component';

describe('AlertCreationComponent', () => {
  let component: AlertCreationComponent;
  let fixture: ComponentFixture<AlertCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
