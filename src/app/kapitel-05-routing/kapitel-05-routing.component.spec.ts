import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel05RoutingComponent } from './kapitel-05-routing.component';

describe('RoutingComponent', () => {
  let component: Kapitel05RoutingComponent;
  let fixture: ComponentFixture<Kapitel05RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel05RoutingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel05RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
