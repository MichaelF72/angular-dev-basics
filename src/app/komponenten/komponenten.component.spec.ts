import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponentenComponent } from './komponenten.component';

describe('KomponentenComponent', () => {
  let component: KomponentenComponent;
  let fixture: ComponentFixture<KomponentenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KomponentenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponentenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
