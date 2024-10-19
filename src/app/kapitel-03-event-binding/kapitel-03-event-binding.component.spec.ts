import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel03EventBindingComponent } from './kapitel-03-event-binding.component';

describe('EventBindingComponent', () => {
  let component: Kapitel03EventBindingComponent;
  let fixture: ComponentFixture<Kapitel03EventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel03EventBindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel03EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
