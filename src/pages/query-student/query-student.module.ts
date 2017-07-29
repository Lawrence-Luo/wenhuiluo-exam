import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QueryStudentPageComponent } from './query-student-page/query-student-page.component';
import { StudentService } from '../add-student/student.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: QueryStudentPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [QueryStudentPageComponent],
  providers:[StudentService]
})
export class QueryStudentModule { }
