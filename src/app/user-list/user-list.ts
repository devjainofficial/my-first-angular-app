import { Component, StreamingResourceOptions } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCard } from '../user-card/user-card'; 

interface User{
  id: number,
  name: string,
  email: string,
  isActive: boolean,
  avatarUrl: string
}

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, UserCard],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
 lastClickedUser: string = '';
  
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      isActive: true,
      avatarUrl: 'https://via.placeholder.com/50'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      isActive: false,
      avatarUrl: 'https://via.placeholder.com/50'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      isActive: true,
      avatarUrl: 'https://via.placeholder.com/50'
    }
  ];
  
  // Handle events FROM child components
  onUserClicked(userName: string): void {
    this.lastClickedUser = userName;
    console.log('User clicked:', userName);
  }
  
  onStatusChanged(event: {userName: string, newStatus: boolean}): void {
    console.log(`${event.userName} status changed to: ${event.newStatus}`);
    
    // Update the user in our array
    const user = this.users.find(u => u.name === event.userName);
    if (user) {
      user.isActive = event.newStatus;
    }
  }
  
  // TrackBy function for performance (like @key in Blazor)
  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}
