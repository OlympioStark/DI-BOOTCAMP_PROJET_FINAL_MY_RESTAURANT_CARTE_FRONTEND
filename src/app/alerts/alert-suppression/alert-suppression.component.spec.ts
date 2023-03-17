import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSuppressionComponent } from './alert-suppression.component';

describe('AlertSuppressionComponent', () => {
  let component: AlertSuppressionComponent;
  let fixture: ComponentFixture<AlertSuppressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSuppressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
