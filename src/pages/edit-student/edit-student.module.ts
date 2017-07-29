import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditStudentPageComponent } from './edit-student-page/edit-student-page.component';
import { StudentService } from '../add-student/student.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EditStudentPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [EditStudentPageComponent],
  providers:[StudentService]
})
export class EditStudentModule { }
