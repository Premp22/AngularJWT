import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdationComponent } from './updation/updation.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    RegistrationComponent,
    AllUsersComponent,
    DashboardComponent,
    UpdationComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class UsersModule {}
