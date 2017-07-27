import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  Students:Array<any> = [
    {"StdNo":10654,
     "StdName":"Sam",
     "Deptment":"2017计算机科学",
     "Exam1":66,
     "Exam2":66,
     "Exam3":66},
     {"StdNo":14876,
     "StdName":"John",
     "Deptment":"2017计算机科学",
     "Exam1":66,
     "Exam2":76,
     "Exam3":56},
     {"StdNo":14876,
     "StdName":"Ken",
     "Deptment":"2017计算机科学",
     "Exam1":95,
     "Exam2":84,
     "Exam3":77},
     {"StdNo":12345,
     "StdName":"Cindy",
     "Deptment":"2017计算机科学",
     "Exam1":95,
     "Exam2":84,
     "Exam3":77},
     {"StdNo":18652,
     "StdName":"Michael",
     "Deptment":"2017计算机科学",
     "Exam1":68,
     "Exam2":79,
     "Exam3":84}
      
  ]
deleteLast(){
  this.Students.pop()
}
saveNewUser(){
  this.Students.push({
    "StdNo":16666,
    "StdName":"Sky",
    "Deptment":"2017计算机科学",
    "Exam1":95,
    "Exam2":89,
    "Exam3":91
  })
}
  sortByAsccending(){
    
    this.Students.sort(function(Obj1, Obj2){
      if (Obj1.StdNo > Obj2.StdNo)
        {return 1;}
      if (Obj1.StdNo < Obj2.StdNo)
        {return -1;}
    });
  }
  sortByDesccending(){
   
    this.Students.sort(function(Obj1, Obj2){
      if (Obj1.StdNo > Obj2.StdNo)
        {return -1;}
      if (Obj1.StdNo < Obj2.StdNo)
        {return 1;}
    });
  }
  sortByRadom(){
   
    this.Students.sort(function(Obj1, Obj2){
      return (Math.random() > 0.5 ? 1 : -1)
    });
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'Lawrence'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is description of day 1 training.'
      },
    ])
  }

  ngOnInit() {
  }

}
