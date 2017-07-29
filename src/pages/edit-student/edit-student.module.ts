import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditStudentPageComponent } from './edit-student-page/edit-student-page.component';
//import { HomeModule } from '../home/home.module';
//import { HomePageComponent } from '../home/home-page/home-page.component';
import { StudentService } from '../add-student/student.service';

@NgModule({
  imports: [
    CommonModule,
    //HomeModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: EditStudentPageComponent, pathMatch: 'full' },
      //{ path: 'edit-student/update', component: HomePageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [EditStudentPageComponent],
  providers:[StudentService]
})
export class EditStudentModule { }
