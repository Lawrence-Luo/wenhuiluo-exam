import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { EditStudentModule } from '../edit-student/edit-student.module'
import { HomePageComponent } from './home-page/home-page.component';
//import { EditStudentPageComponent } from '../edit-student/edit-student-page/edit-student-page.component';
import { StudentService } from '../add-student/student.service';

@NgModule({
  imports: [
    CommonModule,
    //EditStudentModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent, pathMatch: 'full' }
      //{ path: 'home/edit/:sid', component: EditStudentPageComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [HomePageComponent],
  providers:[StudentService]
})
export class HomeModule { }
