import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { UserService, User } from '../services/user';
import { UserCard } from '../user-card/user-card';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, UserCard],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css'
})

export class UserDashboardComponent implements OnInit, OnDestroy {
  users: User[] = [];
  selectedUser: User | null = null;
  totalUsers = 0;
  activeUsers = 0;
  
  private subscriptions = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Subscribe to users observable
    this.subscriptions.add(
      this.userService.users$.subscribe(users => {
        this.users = users;
        this.totalUsers = users.length;
        this.activeUsers = users.filter(u => u.isActive).length;
      })
    );

    // Subscribe to selected user
    this.subscriptions.add(
      this.userService.selectedUser$.subscribe(user => {
        this.selectedUser = user;
      })
    );
  }

  ngOnDestroy(): void {
    // Clean up subscriptions to prevent memory leaks
    this.subscriptions.unsubscribe();
  }

  onUserSelect(user: User): void {
    this.userService.selectUser(user);
  }

  onStatusChange(userId: number): void {
    this.userService.toggleUserStatus(userId);
  }

  clearSelection(): void {
    this.userService.clearSelection();
  }

  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}