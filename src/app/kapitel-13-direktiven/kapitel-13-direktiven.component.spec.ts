import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel13DirektivenComponent } from './kapitel-13-direktiven.component';

describe('DirektivenComponent', () => {
  let component: Kapitel13DirektivenComponent;
  let fixture: ComponentFixture<Kapitel13DirektivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel13DirektivenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel13DirektivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
