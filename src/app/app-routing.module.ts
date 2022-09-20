import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [

  {path:'',redirectTo:'student',pathMatch:'full'},
  { path: 'student', loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule) },
  { path:'admin',component:AdminComponent,
    children:[
      { path:'books',component:BooksComponent },
      { path:'students',component:StudentsComponent },
      { path:'book-details/:id',component:BookDetailsComponent },

    ]},
  { path:'**',component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
