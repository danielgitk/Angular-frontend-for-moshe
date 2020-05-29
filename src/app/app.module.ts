import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersComponent } from './teacher/teachers/teachers.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './navigation/header/header.component';
import { TeacherCreateComponent } from './teacher/teacher-create/teacher-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TeacherDetailsComponent } from './teacher/teacher-details/teacher-details.component';
import { UnivListComponent } from './university/univ-list/univ-list.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AddAdminComponent } from './auth/add-admin/add-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    LoginComponent,
    HeaderComponent,
    TeacherCreateComponent,
    TeacherDetailsComponent,
    UnivListComponent,
    FooterComponent,
    LayoutComponent,
    SidenavListComponent,
    AddAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
