import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './teachers/teachers.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TeacherCreateComponent } from './teacher-create/teacher-create.component';


const routes: Routes = [
  {path: '', component: TeachersComponent},
  {path: 'create', component: TeacherCreateComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
