import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel11FormularvalidierungComponent } from './kapitel11-formularvalidierung.component';

describe('FormularvalidierungComponent', () => {
  let component: Kapitel11FormularvalidierungComponent;
  let fixture: ComponentFixture<Kapitel11FormularvalidierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel11FormularvalidierungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kapitel11FormularvalidierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
