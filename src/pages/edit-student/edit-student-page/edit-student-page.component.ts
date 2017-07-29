import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../add-student/student.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-student-page',
  templateUrl: './edit-student-page.component.html',
  styleUrls: ['./edit-student-page.component.scss']
})
export class EditStudentPageComponent implements OnInit {

  students:any={};
  student:any={};

  // constructor(private route: ActivatedRoute,
  //             private studentService:StudentService,
  //            private location: Location) {
    
  //         this.student = this.studentService.students;
  
  //     };

  // submit()
  // {
  //   //this.studentService.students.push(this.student)
  //   //this.student ={}
  // }

  ngOnInit() {

  }

}
