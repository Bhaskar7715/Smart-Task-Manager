import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Common } from '../../services/common';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
   userName = 'Bhaskar Dhage'; // replace with logged-in user later


   constructor(private commonservice:Common) {}
  onProfile(data:any): void {
    console.log('Profile clicked');
    this.commonservice.changeProfile$.next(data)

  }

  onSettings(data:any): void {
    console.log('Settings clicked');
    this.commonservice.changeProfile$.next(data);
  }

  onLogout(data:any): void {
    console.log('Logout clicked');
    this.commonservice.changeProfile$.next(data);
  }
}
