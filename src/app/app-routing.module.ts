import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './teacher/teachers/teachers.component';
import { LoginComponent } from './auth/login/login.component';
import { TeacherCreateComponent } from './teacher/teacher-create/teacher-create.component';
import { AddAdminComponent } from './auth/add-admin/add-admin.component';


const routes: Routes = [
  {path: '', component: TeachersComponent},
  {path: 'create', component: TeacherCreateComponent},
   {path: 'addadmin', component: AddAdminComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'teachers', component: TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
