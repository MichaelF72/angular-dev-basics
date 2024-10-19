import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel15GuardsComponent } from './kapitel15-guards.component';

describe('GuardsComponent', () => {
  let component: Kapitel15GuardsComponent;
  let fixture: ComponentFixture<Kapitel15GuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel15GuardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kapitel15GuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
