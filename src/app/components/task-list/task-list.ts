import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCard, Task } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks: Task[] = [
    { id: 1, title: 'Buy groceries', description: 'Milk, eggs, bread', completed: false },
    { id: 2, title: 'Read a book', description: 'Finish the Angular book', completed: false },
    { id: 3, title: 'Exercise', description: '30 min workout', completed: true },
  ];

  selectedId: number | null = null;

  onTaskCompleted(updatedTask: Task) {
    this.tasks = this.tasks.map(t =>
      t.id === updatedTask.id ? updatedTask : t
    );
  }

  onTaskDeleted(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }
}