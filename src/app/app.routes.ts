import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard';
import { UserList } from './user-list/user-list';

export const routes: Routes = [
    {
        path: '',
        component: UserDashboardComponent,
        title: 'Home'
    },
    {
        path: 'user-dashboard',
        component: UserDashboardComponent,
        title: 'Home'
    },
    {
        path: 'user-list',
        component: UserList,
        title: 'User List'
    }

];