import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Teacher } from '../teacher.model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {

    form: FormGroup;
    teacher: Teacher;
  constructor(public teacherService :TeacherService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null,{validators:[Validators.required,Validators.minLength(3)]}),
      age: new FormControl(null,{validators:[Validators.required]}),
      department: new FormControl(null,{validators:[Validators.required]}),
      hiredPos: new FormControl(null,{validators:[Validators.required]}),
      gradYear: new FormControl(null,{validators:[Validators.required]}),
      gradField: new FormControl(null,{validators:[Validators.required]}),
      gradUniv: new FormControl(null,{validators:[Validators.required]}),
      currentUniv: new FormControl(null,{validators:[Validators.required]})

    })
  }

  onSaveTeacher(){
    if(this.form.invalid){
      return
    }
    else {
      this.teacherService.addTeacher(this.form.value.name,
        this.form.value.age,
        this.form.value.department,
        this.form.value.hiredPos,
        this.form.value.gradYear,
        this.form.value.gradField,
        this.form.value.gradUniv,
        this.form.value.currentUniv);
    }
   
  }

}
