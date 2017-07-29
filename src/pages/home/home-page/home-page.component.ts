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

  edit(studentList, stdNo){
    this.students = studentList;

    for (var index = 0; index < this.students.length; index++) {
      if (this.students[index].stdno == stdNo){
        this.selectedStudent  = this.students[index];
      }   
    }
    // console.log(stdNo)
    // console.log(this.students)
    // console.log(this.selectedStudent)
  }

  ngOnInit() {
  }

}
