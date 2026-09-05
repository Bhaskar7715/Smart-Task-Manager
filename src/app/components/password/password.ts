import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: 'app-password',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {
form!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.form = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
    },{ validators:this.passwordMatchValidator})
  }

  // passwordMatchValidator(group:AbstractControl):ValidationErrors | null {
  //   const password = group.get('password')?.value;
  //   const confirmPassword = group.get('confirmPassword')?.value;
  //   return password === confirmPassword ? null : {mismatch : true} 
  // }



  passwordMatchValidator(group:AbstractControl):ValidationErrors | null {
    const passowrd = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return passowrd === confirmPassword ? null : {mismatch:true}
  }









  get f(){
    return this.form.controls;
  }
    onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    // call your API here
  }
}
