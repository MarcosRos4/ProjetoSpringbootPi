import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioComponent } from './cardapio.component';

describe('CardapioComponent', () => {
  let component: CardapioComponent;
  let fixture: ComponentFixture<CardapioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardapioComponent]
    });
    fixture = TestBed.createComponent(CardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
