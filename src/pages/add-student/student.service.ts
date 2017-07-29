import { Injectable } from "@angular/core";

@Injectable()
export class StudentService{
    students:Array<any> = [
        {"stdno":10654,
         "name":"Sam",
         "department":"2017计算机科学",
         "exam1":66,
         "exam2":66,
         "exam3":66},
         {"stdno":14876,
         "name":"John",
         "department":"2017计算机科学",
         "exam1":66,
         "exam2":76,
         "exam3":56},
         {"stdno":14876,
         "name":"Ken",
         "department":"2017计算机科学",
         "exam1":95,
         "exam2":84,
         "exam3":77},
         {"stdno":12345,
         "name":"Cindy",
         "department":"2017计算机科学",
         "exam1":95,
         "exam2":84,
         "exam3":77},
         {"stdno":18652,
         "name":"Michael",
         "department":"2017计算机科学",
         "exam1":68,
         "exam2":79,
         "exam3":84} 
      ]

    searchStudent(stdno){
        for (var index = 0; index < this.students.length; index++) {
            if (this.students[index].stdno == stdno)
                return this.students[index]     
        }
    }

    deleteLast(){
        this.students.pop()
        }

    sortByAsccending(){
    
        this.students.sort(function(obj1, obj2){
          return obj1.stdno - obj2.stdno 
    
    });
  }

  sortByDesccending(){
   
    this.students.sort(function(obj1, obj2){
      return obj2.stdno - obj1.stdno
    });
  }
  sortByRadom(){
   
    this.students.sort(function(obj1, obj2){
      return (Math.random() > 0.5 ? 1 : -1)
    });

  

    
        
    }
}