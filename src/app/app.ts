import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [ UserProfileComponent, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-first-angular-app';
  protected name = 'Dev Jain';
  protected role = 'Developer';
  protected age = 22;
}
