import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel09TemplateDrivenFormsComponent } from './kapitel-09-template-driven-forms.component';

describe('TemplateDrivenFormsComponent', () => {
  let component: Kapitel09TemplateDrivenFormsComponent;
  let fixture: ComponentFixture<Kapitel09TemplateDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel09TemplateDrivenFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel09TemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
