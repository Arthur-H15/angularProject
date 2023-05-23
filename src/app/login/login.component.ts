import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
 loginForm!:FormGroup;
 constructor(
  private fromBuilder:FormBuilder,
  private loginService:LoginService
  ){}

  ngOnInit(){
    this.loginService.logout()
    this.loginForm=this.fromBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]

    })
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value.email,this.loginForm.value.password)
    console.log(this.loginForm.value);
  }

  isFormControlInvalid(controlName: string, errorName: string): boolean {
    const control = this.loginForm.get(controlName);
    if(control?.invalid && control?.dirty && control?.hasError(errorName)) return true
    return false
  }
}
