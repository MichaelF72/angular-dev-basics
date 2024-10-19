import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel08InterceptorsComponent } from './kapitel08-interceptors.component';

describe('InterceptorsComponent', () => {
  let component: Kapitel08InterceptorsComponent;
  let fixture: ComponentFixture<Kapitel08InterceptorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel08InterceptorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kapitel08InterceptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
