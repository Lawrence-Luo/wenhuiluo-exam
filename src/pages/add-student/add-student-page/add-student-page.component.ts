import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'


@Component({
  selector: 'app-add-student-page',
  templateUrl: './add-student-page.component.html',
  styleUrls: ['./add-student-page.component.scss']
})


export class AddStudentPageComponent implements OnInit {

  student:any ={

  };

 

  constructor(private studentService:StudentService) {
  }

  submit()
  {
    this.studentService.students.push(this.student)
    this.student ={}
  }

  ngOnInit() {
  }

}
