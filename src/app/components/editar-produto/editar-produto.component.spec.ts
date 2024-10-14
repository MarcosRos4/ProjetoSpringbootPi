import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProdutoComponent } from './editar-produto.component';

describe('EditarProdutoComponent', () => {
  let component: EditarProdutoComponent;
  let fixture: ComponentFixture<EditarProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProdutoComponent]
    });
    fixture = TestBed.createComponent(EditarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
