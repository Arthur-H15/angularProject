import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaUsuariosComponent } from './tabela-usuarios.component';

describe('TabelaUsuariosComponent', () => {
  let component: TabelaUsuariosComponent;
  let fixture: ComponentFixture<TabelaUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaUsuariosComponent]
    });
    fixture = TestBed.createComponent(TabelaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
