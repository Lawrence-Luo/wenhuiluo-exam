import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazyload模式路由，适合服务端渲染
const SSRroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
  { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

// SPA模式路由，适合客户端打包
import { HomePageComponent } from '../pages/home/home-page/home-page.component';
import { AboutPageComponent } from '../pages/about/about-page/about-page.component';
import { AddStudentPageComponent } from '../pages/add-student/add-student-page/add-student-page.component';
import { QueryStudentPageComponent } from '../pages/query-student/query-student-page/query-student-page.component';
import { EditStudentPageComponent } from '../pages/edit-student/edit-student-page/edit-student-page.component';

const SPAroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'add', component: AddStudentPageComponent },
  { path: 'query', component: QueryStudentPageComponent },
  { path: 'edit', component: EditStudentPageComponent }
];

// 配置路由模式
const routes = SPAroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
