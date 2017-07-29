import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddStudentPageComponent } from './add-student-page/add-student-page.component';
import { StudentService } from './student.service'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AddStudentPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AddStudentPageComponent],
  providers:[StudentService]
})
export class AddStudentModule { }
