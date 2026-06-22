import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./components/task-list/task-list').then(c => c.TaskList)   // Lazy loaded
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home').then(c => c.Home)   // Lazy loaded
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./components/user-registration/user-registration').then(c => c.UserRegistration)   // Lazy loaded
  },
  {
    path: 'bank',
    loadComponent: () =>
      import('./components/bank-details/bank-details').then(c => c.BankDetails)   // Lazy loaded
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./components/users/users').then(c => c.Users)   // Lazy loaded
  }
];