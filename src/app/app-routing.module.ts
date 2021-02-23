import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';


const routes: Routes = [
  {path: '', component: RotatingCardComponent },
  {path: 'todo', component: TodoComponent },
  {path: 'cv', component: CvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
