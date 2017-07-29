import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../add-student/student.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-student-page',
  templateUrl: './edit-student-page.component.html',
  styleUrls: ['./edit-student-page.component.scss']
})
export class EditStudentPageComponent implements OnInit {

  student:any={ 

  };


  constructor(private studentService:StudentService,
              private location: Location,
   ) 
     {
    
          //this.students = this.studentService.students;
          this.student = this.studentService.student;
          //console.log(this.studentService.student)
          //console.log(this.student)
  
      };

  submit()
  {
    //this.studentService.students.push(this.student)
    for (var index = 0; index < this.studentService.students.length; index++) {
          if (this.studentService.students[index].stdno == this.student.stdno)
            {
              this.studentService.students[index] = this.student
            }
      
    }

    this.location.back();
    
    //this.studentService.students.find
    //this.student ={}
  }

  ngOnInit() {

  }

}
