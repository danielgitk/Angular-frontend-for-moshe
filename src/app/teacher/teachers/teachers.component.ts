import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher.model';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  
teachers : Teacher[]=[];
  public displayedColumns = ['name', 'age', 'department', 'details', 'edit',
'delete'
];
public dataSource = new MatTableDataSource<Teacher>();
constructor(public teacherService:TeacherService, public router:Router) { }
ngOnInit() {
this.getAllTeachers();
}
public getAllTeachers = () => {
// this.repoService.getData('api/Teacher')
// .subscribe(res => {
 this.teachers = 
 [{id: "dfa",
  name: "adfa",
  age: "23",
  department: "dfadf",
  hiredPos: "dfaa",
  currentUniv: "fafad",
  gradField: "fadfa",
  gradUniv: "fdafa",
  gradYear: "dafa"
  },
  {id: "df3343a",
  name: "adfa",
  age: "43",
  department: "dfadf",
  hiredPos: "dfaa",
  currentUniv: "fafad",
  gradField: "fadfa",
  gradUniv: "fdafa",
  gradYear: "dafa"
  }];


  this.dataSource.data = this.teachers;
// })
}


public redirectToDetails = (id: string) => {
console.log("details clicked");

}
public redirectToUpdate = (id: string) => {
  console.log(id);
  this.router.navigate(['/login']);
  
}
public redirectToDelete = (teacherId: string) => {
      console.log("delete clicked");
  
    this.teacherService.deleteTeacher(teacherId).subscribe(() => {
      this.teacherService.getTeachers();
    })

}



}