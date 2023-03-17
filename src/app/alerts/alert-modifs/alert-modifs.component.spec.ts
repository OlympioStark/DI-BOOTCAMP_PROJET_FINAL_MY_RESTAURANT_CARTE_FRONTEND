import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModifsComponent } from './alert-modifs.component';

describe('AlertModifsComponent', () => {
  let component: AlertModifsComponent;
  let fixture: ComponentFixture<AlertModifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertModifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertModifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
