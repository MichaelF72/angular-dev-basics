import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel02PropertyBindingComponent } from './kapitel02-property-binding.component';

describe('PropertyBindingComponent', () => {
  let component: Kapitel02PropertyBindingComponent;
  let fixture: ComponentFixture<Kapitel02PropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel02PropertyBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kapitel02PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
