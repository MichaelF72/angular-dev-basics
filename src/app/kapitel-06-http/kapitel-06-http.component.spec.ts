import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel06HttpComponent } from './kapitel-06-http.component';

describe('HttpComponent', () => {
  let component: Kapitel06HttpComponent;
  let fixture: ComponentFixture<Kapitel06HttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel06HttpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel06HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
