import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createUsuario, updateUsuario } from 'src/assets/interfaces/APIInterface';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  form!: FormGroup;
  formMode!: 'create' | 'edit';
  user: any;
  
 
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.formMode = this.data.formMode;
    this.user = this.data.user;

    // Defina as propriedades e validadores para o seu formulário
    this.form = this.fb.group({
      nome: [this.user?.nome ? this.user?.nome : '', Validators.required],
      email: [this.user?.email ? this.user?.email : '', [Validators.required, Validators.email]],
      numero: [this.user?.numero ? this.user.numero:'', [Validators.required, Validators.pattern('[0-9]{11}')]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }
  
  

  // Método chamado quando o usuário clica em salvar
  save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
  update(){
    const campos=this.verificarCamposAlterados()
    this.dialogRef.close({id:this.user.id,...campos})

  }
  verificarCamposAlterados(){
    const controls = this.form.controls;
    const camposModificados:any ={}
    Object.keys(controls).forEach((controlName: string) => {
      const control = controls[controlName];
    
      // Verifica se o controle foi modificado (dirty)
      if (control.dirty) {
        camposModificados[controlName]=control.value
      }
    });
    return camposModificados
  }

  validateField(field: string): void {
    const control = this.form.get(field);

    if (control) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }

  isFieldValid(field: string): boolean {
    const control = this.form.get(field);

    if (control && control.touched) {
      return control.invalid;
    }

    return false;
  }

  isPasswordsMatch(): boolean {
    const senhaControl = this.form.get('senha');
    const confirmarSenhaControl = this.form.get('confirmarSenha');

    if (senhaControl && confirmarSenhaControl) {
      return senhaControl.value !== confirmarSenhaControl.value;
    }

    return false;
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const senhaControl = control.get('senha');
    const confirmarSenhaControl = control.get('confirmarSenha');

    if (senhaControl && confirmarSenhaControl && senhaControl.value !== confirmarSenhaControl.value) {
      return { passwordMismatch: true };
    }

    return null;
  }
}
