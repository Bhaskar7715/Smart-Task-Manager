import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
   registrationForm!: FormGroup;
  submitted = false;
  successMessage = '';

  departments = ['Angular', 'React', 'Vue', 'Node.js', 'Java'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      department: ['', Validators.required],
      skills: this.fb.array([this.createSkill()])
    });
  }

  // FormArray skill row
  createSkill(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0)]]
    });
  }

  get skills(): FormArray {
    return this.registrationForm.get('skills') as FormArray;
  }

  get f() {
    return this.registrationForm.controls;
  }

  addSkill(): void {
    this.skills.push(this.createSkill());
  }

  removeSkill(index: number): void {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registrationForm.invalid) return;

    console.log('Form Data:', this.registrationForm.value);
    this.successMessage = 'Registration Successful!';
    this.registrationForm.reset();
    this.skills.clear();
    this.skills.push(this.createSkill());
    this.submitted = false;
  }

  onReset(): void {
    this.submitted = false;
    this.successMessage = '';
    this.registrationForm.reset();
    this.skills.clear();
    this.skills.push(this.createSkill());
  }








  // form!:FormGroup;
  // submitted = false;

  // designation:any = [
  //   {
  //     id:1,
  //     name:'Angular Developer'
  //   },
  //   {
  //     id:2,
  //     name:'UI Developer'
  //   },
  //   {
  //     id:3,
  //     name:'Backend Developer'
  //   },
  //   {
  //     id:4,
  //     name:'Reporting Manager'
  //   },
  // ]
 
  // constructor(private fb:FormBuilder) {}

  // ngOnInit(){
  //   this.form = this.fb.group({
  //     skillName:["",Validators.required],
  //     email:["",Validators.required],
  //     phone:["",Validators.required],
  //     designation:["",Validators.required],
  //     skills:this.fb.array([this.createSkill()]),
  //   })
  // }

  // get f(){
  //   return this.form.controls;
  // }

  // get skills():FormArray{
  //   return this.form.get('skills') as FormArray;
  // }

  // createSkill():FormGroup {
  //   return this.fb.group({
  //     skillfield:['',Validators.required],
  //     experience:['',Validators.required],
  //   })
  // }

  // addSkills(){
  //   this.skills.push(this.createSkill())
  // }

  // submit(){
  //   this.submitted = true;
  //   console.log(this.form.value);
  //   this.form.markAllAsTouched();
  // }





  // form!:FormGroup;
  // department:any = [
  //   {id:1,name:'Angular Developer'},
  //   {id:1,name:'Backend Developer'},
  //   {id:1,name:'Reporting Manager'},
  //   {id:1,name:'HR'},
  //   {id:1,name:'Tester'}
  // ]
  
  // constructor(private fb:FormBuilder) {
    
  // }

  // ngOnInit(){
  //   this.form = this.fb.group({
  //     name:['',Validators.required],
  //     email:['',Validators.required],
  //     contact:['',Validators.required],
  //     department:['',Validators.required],
  //     skills:this.fb.array([this.createSkills()]),
  //   })
  // }

  // get f(){
  //   return this.form.controls;
  // }

  // get skills():FormArray{
  //   return this.form.get('skills') as FormArray;
  // }
  // addSkill(){
  //   this.skills.push(this.createSkills());
  // }

  // createSkills():FormGroup {
  //   return this.fb.group({
  //     skillName:['',Validators.required],
  //     experience:['',Validators.required]
  //   })
  // }
  //  submit(){
  //   console.log(this.form.value);
  //   this.form.markAllAsTouched();
  // }

}
