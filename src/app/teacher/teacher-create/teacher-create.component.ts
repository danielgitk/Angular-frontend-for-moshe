import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Teacher } from '../teacher.model';
import { TeacherService } from '../teacher.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TeacherDetailsComponent } from '../teacher-details/teacher-details.component';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {


    private mode = 'create';
    private teacherId :string;
    form: FormGroup;
    teacher: Teacher;
  constructor(public teacherService :TeacherService, public route:ActivatedRoute) { }

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

    this.route.paramMap.subscribe((paramMap:ParamMap) => {
      if (paramMap.has('teacherId')){
        this.mode = 'edit';
        this.teacherId = paramMap.get('teacherId');
        this.teacherService.getTeacher(this.teacherId).subscribe(teacherData => {
          this.teacher = {
          id:teacherData._id,
          name: teacherData.name,
          age: teacherData.age,
          department: teacherData.department,
          hiredPos: teacherData.hiredPos,
          gradYear: teacherData.gradYear,
          gradField: teacherData.gradField,
          gradUniv: teacherData.gradUniv,
          currentUniv: teacherData.currentUniv

          
        } ;
        this.form.setValue({
          name: this.teacher.name,
          age: this.teacher.age,
          department: this.teacher.department,
          hiredPos:  this.teacher.hiredPos,
          gradYear: this.teacher.gradYear,
          gradField: this.teacher.gradField,
          gradUniv: this.teacher.gradUniv,
          currentUniv: this.teacher.currentUniv
        });
        });
      }
      else {
        this.mode = 'create';
        this.teacherId = null;
      }
    });
  }

  onSaveTeacher(){
    if(this.form.invalid){
      return
    }

    if (this.mode ==='create'){
      this.teacherService.addTeacher(this.form.value.name,
        this.form.value.age,
        this.form.value.department,
        this.form.value.hiredPos,
        this.form.value.gradYear,
        this.form.value.gradField,
        this.form.value.gradUniv,
        this.form.value.currentUniv);
    
    }
    else {

      this.teacherService.updateTeacher(this.teacherId,this.form.value.name,
        this.form.value.age,
        this.form.value.department,
        this.form.value.hiredPos,
        this.form.value.gradYear,
        this.form.value.gradField,
        this.form.value.gradUniv,
        this.form.value.currentUniv);
    }
    this.form.reset();
   
  }

}
