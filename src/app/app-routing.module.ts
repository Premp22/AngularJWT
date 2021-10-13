import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    path: 'login',

    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./Users/users.module').then((mod) => mod.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
