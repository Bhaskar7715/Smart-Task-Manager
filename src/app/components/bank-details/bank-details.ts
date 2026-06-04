import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-bank-details',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule
    

  ],
  templateUrl: './bank-details.html',
  styleUrl: './bank-details.css',
})
export class BankDetails {

  form!:FormGroup;

  constructor(private fb:FormBuilder) {
    
  }

  banks = [
    {id:1,name:"State Bank Of India"},
    {id:2,name:"Bank of Badoda"},
    {id:3, name:"Bank Of Maharashtra"},
    {id:4,name:"Bank Of India"}
  ]

  ngOnInit(){

    this.form = this.fb.group({
      userName:[null,Validators.required],
      mobile:[null,Validators.required],
      aadharNumber:[null,Validators.required],
      bankName:[null,Validators.required],
      Iskyc:[false,Validators.nullValidator],
      terms:[false,Validators.nullValidator]
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return
    }
    console.log(this.form.value)
  }

}
