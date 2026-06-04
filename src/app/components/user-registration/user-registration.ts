import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-user-registration',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.css',
})
export class UserRegistration {

  form!:FormGroup;
  roles = [
    {id:1, role:"Angular Developer"},
    {id:2, role:"Associate Developer"},
    {id:3, role:"Business Analysis"},
    {id:4, role:"UI Developer"}
  ]
  constructor(private fb:FormBuilder) {}

  ngOnInit(){

    this.form = this.fb.group({
      Name:[null,Validators.required],
      description:[null,Validators.required],
      age:[18,Validators.required],
      role:[null,Validators.required],
      isActive:[false,Validators.nullValidator],
      agreeTerms:[false,Validators.nullValidator],
      Addressess:this.fb.array([this.createAddress()])
    })
  }
  createAddress():FormGroup{
    return this.fb.group({
      street:['',Validators.required],
      city:['',Validators.required],
    })
  }
 get Addressess():FormArray{
  return this.form.get('Addressess') as FormArray;
 }
 addAddress(){
  this.Addressess.push(this.createAddress())
 }
//  get f(): { [key: string]: AbstractControl } {
//     return this.form.controls;
//   }
getAddressControl(index: number, controlName: string): AbstractControl {
    return this.Addressess.at(index).get(controlName) as AbstractControl;
}
  get f() {
  return this.form.controls;
}
  submit(){
     if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
    }
    console.log(this.form.value)
  }
}
