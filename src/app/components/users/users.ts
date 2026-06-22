import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  users: any[] = [];
  userForm: FormGroup;
  isLoading = true;

  isEditMode: boolean = false;
  editUserId: number | null = null;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name:     ['', Validators.required],
      phone:    ['', Validators.required],
      username: ['', Validators.nullValidator],
      website:  ['']
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  // ─── GET ───────────────────────────────────────────────
  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.users = res;
      this.isLoading = false;
    });
  }

  // ─── POST ──────────────────────────────────────────────
  addUser() {
    this.isLoading = true;
    if (this.isEditMode) return;

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.isLoading = false;
      return;
    }

    this.http.post('https://jsonplaceholder.typicode.com/users', this.userForm.value)
      .subscribe((res: any) => {
        // JSONPlaceholder hamesha id:11 return karta hai fixed,
        // isliye duplicate se bachne ke liye manually unique id generate kar rahe hain
        const newId = this.users.length
          ? Math.max(...this.users.map((u: any) => u.id)) + 1
          : 1;

        const newUser = { ...this.userForm.value, id: newId };
        this.users = [...this.users, newUser];
        this.userForm.reset();
        this.isLoading = false;
      });
  }

  // ─── SET EDIT MODE ─────────────────────────────────────
  editUser(user: any) {
    this.isEditMode = true;
    this.editUserId = user.id;

    this.userForm.patchValue({
      name:     user.name,
      phone:    user.phone,
      username: user.username,
      website:  user.website
    });
  }

  // ─── PUT (full update) ─────────────────────────────────
  updateUser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.http.put(`https://jsonplaceholder.typicode.com/users/${this.editUserId}`, this.userForm.value)
      .subscribe((res: any) => {
        // PUT: poora object replace hota hai
        this.users = this.users.map((u: any) =>
          u.id === this.editUserId
            ? { ...this.userForm.value, id: this.editUserId }
            : u
        );
        this.cancelEdit();
      });
  }

  // ─── PATCH (partial update — only name) ────────────────
  patchUser() {
    const patchData = { name: this.userForm.get('name')?.value };

    if (!patchData.name) {
      alert('Name field required for patch!');
      return;
    }

    this.http.patch(`https://jsonplaceholder.typicode.com/users/${this.editUserId}`, patchData)
      .subscribe((res: any) => {
        // PATCH: sirf name field update hogi, baaki fields same rahenge
        this.users = this.users.map((u: any) =>
          u.id === this.editUserId
            ? { ...u, name: patchData.name }
            : u
        );
        this.cancelEdit();
      });
  }

  // ─── DELETE ────────────────────────────────────────────
  deleteUser(id: number) {
    this.isLoading = true;
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(() => {
      this.users = this.users.filter((user: any) => user.id !== id);
      this.isLoading = false;
    });
  }

  // ─── CANCEL EDIT ───────────────────────────────────────
  cancelEdit() {
    this.isEditMode = false;
    this.editUserId = null;
    this.userForm.reset();
  }

  // ─── TRACK BY ──────────────────────────────────────────
  trackById(index: number, user: any) {
    return user.id;
  }
}