import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel14LazyLoadingComponent } from './kapitel14-lazy-loading.component';

describe('LazyLoadingComponent', () => {
  let component: Kapitel14LazyLoadingComponent;
  let fixture: ComponentFixture<Kapitel14LazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel14LazyLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kapitel14LazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
