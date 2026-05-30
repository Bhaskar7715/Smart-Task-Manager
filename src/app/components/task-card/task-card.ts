import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-card',
  imports: [CommonModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input() task!: Task;                              // Receives a task object from parent
  @Input() highlight: boolean = false;               // Optional styling flag

  @Output() taskCompleted = new EventEmitter<Task>(); // Emits when task is toggled
  @Output() taskDeleted = new EventEmitter<number>(); // Emits the task id to delete

  toggleComplete() {
    this.task = { ...this.task, completed: !this.task.completed };
    this.taskCompleted.emit(this.task);
  }

  deleteTask() {
    this.taskDeleted.emit(this.task.id);
  }
}