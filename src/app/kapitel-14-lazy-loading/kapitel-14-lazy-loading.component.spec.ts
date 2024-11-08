import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel14LazyLoadingComponent } from './kapitel-14-lazy-loading.component';

describe('GuardsComponent', () => {
  let component: Kapitel14LazyLoadingComponent;
  let fixture: ComponentFixture<Kapitel14LazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel14LazyLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel14LazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
