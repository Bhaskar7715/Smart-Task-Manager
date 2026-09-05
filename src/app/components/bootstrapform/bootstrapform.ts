import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Common } from '../../services/common';

@Component({
  selector: 'app-bootstrapform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './bootstrapform.html',
  styleUrl: './bootstrapform.css',
})
export class Bootstrapform {
  form!:FormGroup;
  constructor(private fb:FormBuilder, private common:Common) {}

  ngOnInit(){
    this.form  = this.fb.group({
      name:['',Validators.required],
      email:['', Validators.email],
      mobile:['', [Validators.required, Validators.minLength(10)]],
      designation:['',Validators.required],
      skills:this.fb.array([this.createSkill()])
    })
  }

  createSkill():FormGroup{
    return this.fb.group({
      skillName:['',Validators.required],
      experience:['', Validators.required],
    })
  }

  get skills() : FormArray{
    return this.form.get('skills') as FormArray
  }

  addSkill(){
    this.skills.push(this.createSkill())
  }

  removeSkill(i:number){
    if(this.skills.length > 1){
      this.skills.removeAt(i)
    }
  }

 get f(){
    return this.form.controls;
  }

 save() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }
  console.log(this.form.value);
  this.common.saveResume(this.form.value).subscribe({
    next: (res) => {
      console.log('Saved successfully:', res);
      this.form.reset();
    },
    error: (err) => {
      console.error('Save failed:', err);
    }
  });
}


}
