import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdationComponent } from './updation/updation.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'details',
        component: AllUsersComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },

      {
        path: 'update',
        component: UpdationComponent,
      },
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
