// 当打包部署静态包时，需要加载本Module

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AddStudentModule } from './add-student/add-student.module';
import { QueryStudentModule } from './query-student/query-student.module';
import { EditStudentModule } from './edit-student/edit-student.module';


@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    AboutModule,
    AddStudentModule,
    QueryStudentModule,
    EditStudentModule
  ],
})
export class SPAModule { }
