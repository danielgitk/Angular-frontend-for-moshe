import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher.model';
import { MatTableDataSource } from '@angular/material/table';


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
//constructor(private repoService: RepositoryService) { }
ngOnInit() {
this.getAllOwners();
}
public getAllOwners = () => {
// this.repoService.getData('api/owner')
// .subscribe(res => {
 this.teachers = 
 [{id: "dfa",
  name: "adfa",
  dateOfBirth: Date.now(),
  address: "string"},
  {id: "123",
  name: "adfa",
  dateOfBirth: Date.now(),
  address: "string"}];
  this.dataSource.data = this.teachers;
// })
}


public redirectToDetails = (id: string) => {
}
public redirectToUpdate = (id: string) => {
}
public redirectToDelete = (id: string) => {


}
}