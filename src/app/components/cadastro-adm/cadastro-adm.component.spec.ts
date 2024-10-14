import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdmComponent } from './cadastro-adm.component';

describe('CadastroAdmComponent', () => {
  let component: CadastroAdmComponent;
  let fixture: ComponentFixture<CadastroAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAdmComponent]
    });
    fixture = TestBed.createComponent(CadastroAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
