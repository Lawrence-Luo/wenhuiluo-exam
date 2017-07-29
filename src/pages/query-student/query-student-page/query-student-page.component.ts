import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../add-student/student.service';

@Component({
  selector: 'app-query-student-page',
  templateUrl: './query-student-page.component.html',
  styleUrls: ['./query-student-page.component.scss']
})
export class QueryStudentPageComponent implements OnInit {

  student:any={

  };

  constructor(private studentService:StudentService) {

    
    
   }

  query(){
    this.student = this.studentService.searchStudent(this.student.stdno);
    console.log(this.student)
  }

  ngOnInit() {
  }

}
