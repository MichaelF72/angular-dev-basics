import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel10ReactiveFormsComponent } from './kapitel10-reactive-forms.component';

describe('ReactiveFormsComponent', () => {
  let component: Kapitel10ReactiveFormsComponent;
  let fixture: ComponentFixture<Kapitel10ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel10ReactiveFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kapitel10ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
