import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel01InterpolationComponent } from './kapitel01-interpolation.component';

describe('KomponentenComponent', () => {
  let component: Kapitel01InterpolationComponent;
  let fixture: ComponentFixture<Kapitel01InterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel01InterpolationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel01InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
