import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel04DependencyInjectionComponent } from './kapitel-04-dependency-injection.component';

describe('DependencyInjectionComponent', () => {
  let component: Kapitel04DependencyInjectionComponent;
  let fixture: ComponentFixture<Kapitel04DependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel04DependencyInjectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel04DependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
