import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { FirstComponent } from './components/first/first.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { WordComponent } from './components/word/word.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { TodoComponent } from './todo/todo/todo.component';
/* cv */
const routes: Routes = [
  { path: '', component: RotatingCardComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: DetailPersonneComponent },
  { path: 'color/:color', component: ColorComponent },
  { path: 'word', component: WordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
