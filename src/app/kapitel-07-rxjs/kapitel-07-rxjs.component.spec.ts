import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel07RxjsExampleComponent } from './kapitel-07-rxjs.component';

describe('RxjsComponent', () => {
  let component: Kapitel07RxjsExampleComponent;
  let fixture: ComponentFixture<Kapitel07RxjsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapitel07RxjsExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kapitel07RxjsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
