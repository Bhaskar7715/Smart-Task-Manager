import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dump } from '../dump/dump';
import { Common } from '../../services/common';

@Component({
  selector: 'app-smart',
  imports: [CommonModule, ReactiveFormsModule,Dump],
  templateUrl: './smart.html',
  styleUrl: './smart.css',
})
export class Smart {

form!:FormGroup
smartFormData:any[] = [];

constructor(private http:HttpClient,private fb:FormBuilder,private commonService:Common) { }

ngOnInit(){
  this.form = this.fb.group({
    employee:[null,Validators.required],
    email:[null,Validators.required],
    contact:[null,Validators.required],
    designation:["Angular Developer",Validators.nullValidator],
    skills: this.fb.array([this.createSkill()]) 
  })
}

get f(){
  return this.form.controls;
}
// ✅ Ek skill group banata hai
createSkill(): FormGroup {
  return this.fb.group({
    skillName:[null, Validators.required],
    experience:[null, Validators.required]
  });
}

get skills(): FormArray {
  return this.form.get('skills') as FormArray;
}
// ✅ Naya skill row add karo
addSkill(){
  this.skills.push(this.createSkill());
}

// ✅ Skill row remove karo
removeSkill(index: number){
  this.skills.removeAt(index);
}

submit(){
  if(this.form.invalid){
    this.form.markAllAsTouched();
    return
  }
  this.smartFormData.push(this.form.value);
  // this.commonService.smartData$.next(this.form.value)
  console.log(this.form.value)
}
  getdumbevent(data:any){
    console.log('email',data)
  }


}
