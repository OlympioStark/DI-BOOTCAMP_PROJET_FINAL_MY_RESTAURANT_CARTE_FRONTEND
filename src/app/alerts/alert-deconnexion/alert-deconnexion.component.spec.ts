import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDeconnexionComponent } from './alert-deconnexion.component';

describe('AlertDeconnexionComponent', () => {
  let component: AlertDeconnexionComponent;
  let fixture: ComponentFixture<AlertDeconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDeconnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDeconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
