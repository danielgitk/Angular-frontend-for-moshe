import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './teacher/teachers/teachers.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TeacherCreateComponent } from './teacher/teacher-create/teacher-create.component';


const routes: Routes = [
  {path: '', component: TeachersComponent},
  {path: 'create', component: TeacherCreateComponent},
  // {path: 'signup', component: SignupComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'teachers', component: TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
