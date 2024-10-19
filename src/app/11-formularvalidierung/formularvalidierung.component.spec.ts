import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularvalidierungComponent } from './formularvalidierung.component';

describe('FormularvalidierungComponent', () => {
  let component: FormularvalidierungComponent;
  let fixture: ComponentFixture<FormularvalidierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularvalidierungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularvalidierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
