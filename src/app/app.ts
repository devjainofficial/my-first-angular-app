import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { UserProfileComponent } from './user-profile/user-profile';
// import { UserList } from './user-list/user-list';
import { UserDashboardComponent } from './user-dashboard/user-dashboard';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-first-angular-app';
  protected name = 'Dev Jain';
  protected role = 'Developer';
  protected age = 22;
}
