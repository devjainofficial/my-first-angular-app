import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfileComponent {
  userName: string = 'John Doe';
  email: string = 'john.doe@example.com';
  isActive: boolean = true;
  joinDate: Date = new Date('2023-01-15');
  
  toggleStatus(): void {
    this.isActive = !this.isActive;
  }
  
  getStatusText(): string {
    return this.isActive ? 'Active' : 'Inactive';
  }
}