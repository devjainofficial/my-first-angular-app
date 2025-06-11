import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User{
  id: number,
  name: string,
  email: string,
  isActive: boolean,
  avatarUrl: string,
  department: string
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@company.com',
      isActive: true,
      avatarUrl: 'https://via.placeholder.com/50',
      department: 'Engineering'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@company.com',
      isActive: false,
      avatarUrl: 'https://via.placeholder.com/50',
      department: 'Marketing'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@company.com',
      isActive: true,
      avatarUrl: 'https://via.placeholder.com/50',
      department: 'Sales'
    }
  ];

  // BehaviorSubject for reactive data (like INotifyPropertyChanged in .NET)
  private usersSubject = new  BehaviorSubject<User[]>(this.users);
  private selectedUserSubject = new BehaviorSubject<User | null>(null);

  // Public observables (read-only streams)
  public users$ = this.usersSubject.asObservable();
  public selectedUser$ = this.selectedUserSubject.asObservable();

   // CRUD Operations
  getAllUsers(): Observable<User[]> {
    return this.users$;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(user: Omit<User, 'id'>): void {
    const newUser: User = {
      ...user,
      id: Math.max(...this.users.map(u => u.id)) + 1
    };
    
    this.users.push(newUser);
    this.usersSubject.next([...this.users]); // Emit updated list
  }

  updateUser(id: number, updates: Partial<User>): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updates };
      this.usersSubject.next([...this.users]); // Emit updated list
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.usersSubject.next([...this.users]); // Emit updated list
  }

  // Selection management
  selectUser(user: User): void {
    this.selectedUserSubject.next(user);
  }

  clearSelection(): void {
    this.selectedUserSubject.next(null);
  }

  // Business logic
  toggleUserStatus(id: number): void {
    const user = this.getUserById(id);
    if (user) {
      this.updateUser(id, { isActive: !user.isActive });
    }
  }

  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive);
  }

  getUsersByDepartment(department: string): User[] {
    return this.users.filter(user => user.department === department);
  }
}
