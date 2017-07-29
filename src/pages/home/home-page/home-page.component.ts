import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { StudentService } from '../../add-student/student.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  students:any={};

  selectedStudent:any={

  };

  constructor(private studentService:StudentService) {

        this.students = this.studentService.students;
  };

  edit(studentList){
      this.studentService.student= studentList

      console.log(this.studentService.student);
    }
  

  ngOnInit() {
  }

}
