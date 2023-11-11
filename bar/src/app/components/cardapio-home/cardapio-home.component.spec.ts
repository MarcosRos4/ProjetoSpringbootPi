import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioHomeComponent } from './cardapio-home.component';

describe('CardapioHomeComponent', () => {
  let component: CardapioHomeComponent;
  let fixture: ComponentFixture<CardapioHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardapioHomeComponent]
    });
    fixture = TestBed.createComponent(CardapioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
