import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher.model';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherService } from '../teacher.service';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  
teachers : Teacher[]=[];
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update',
'delete'
];
public dataSource = new MatTableDataSource<Teacher>();
constructor(public teacherService:TeacherService) { }
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
  {id: "dfa",
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

}
public redirectToUpdate = (id: string) => {
}
public redirectToDelete = (teacherId: string) => {
  
    this.teacherService.deleteTeacher(teacherId).subscribe(() => {
      this.teacherService.getTeachers();
    })

}


}