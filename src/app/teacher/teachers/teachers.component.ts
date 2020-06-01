import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Teacher } from '../teacher.model';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit ,AfterViewInit{

  
teachers : Teacher[]=[];
  public displayedColumns = ['name', 'age', 'department','currentUniv', 'details', 'edit',
'delete'
];
public dataSource = new MatTableDataSource<Teacher>();
@ViewChild(MatSort) sort: MatSort;
constructor(public teacherService:TeacherService, public router:Router) { }
ngOnInit() {
this.getAllTeachers();
}

ngAfterViewInit():void {
  this.dataSource.sort = this.sort;
}
public getAllTeachers = () => {
// this.repoService.getData('api/Teacher')
// .subscribe(res => {
 this.teachers = 
 [{id: "dqwe",
  name: "fdaafa",
  age: 23,
  department: "dfadf",
  hiredPos: "dfaa",
  currentUniv: "fafad",
  gradField: "fadfa",
  gradUniv: "fdafa",
  gradYear: "dafa"
  },
  {id: "df3343a",
  name: "adfa",
  age: 43,
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
this.router.navigate(['/details'])

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