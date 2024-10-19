import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel16StandaloneComponentsComponent } from './kapitel-16-standalone-components.component';

describe('StandaloneComponentsComponent', () => {
  let component: Kapitel16StandaloneComponentsComponent;
  let fixture: ComponentFixture<Kapitel16StandaloneComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel16StandaloneComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel16StandaloneComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
