// CHILD COMPONENT: user-card.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  // INPUT: Receives data from parent (like [Parameter] in Blazor)
  @Input() userName: string = '';
  @Input() email: string = '';
  @Input() isActive: boolean = true;
  @Input() avatarUrl: string = '';
  @Input() showActions: boolean = true;

  // OUTPUT: Sends events to parent (like EventCallback in Blazor)
  @Output() userClicked = new EventEmitter<string>;
  @Output() statusChanged = new EventEmitter<{userName: string, newStatus: boolean}>();
  
  // Methods
  onUserClick(): void {
    // Emit event to parent
    this.userClicked.emit(this.userName);
  }

  onToggleStatus(): void { 
    this.isActive = !this.isActive;

    this.statusChanged.emit({
      userName: this.userName,
      newStatus: this.isActive
    });
  }
}
