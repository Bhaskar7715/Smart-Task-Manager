import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  name:string = '';
  names:string[]=[];

  onSubmit(){
    if(this.name.trim()){
      this.names.push(this.name);
      this.name = '';
    }
  }
  remove(index:number){
    this.names.splice(index,1)
  }
}