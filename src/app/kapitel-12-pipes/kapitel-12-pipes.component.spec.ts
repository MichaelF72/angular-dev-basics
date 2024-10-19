import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel12PipesComponent } from './kapitel-12-pipes.component';

describe('PipesComponent', () => {
  let component: Kapitel12PipesComponent;
  let fixture: ComponentFixture<Kapitel12PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel12PipesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel12PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
