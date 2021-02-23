import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackComponent } from './component/back/back.component';
import { FrontComponent } from './component/front/front.component';
import { ColorComponent } from './components/color/color.component';
import { FirstComponent } from './components/first/first.component';
import { NF404Component } from './components/nf404/nf404.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { SecondComponent } from './components/second/second.component';
import { WordComponent } from './components/word/word.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { TodoComponent } from './todo/todo/todo.component';
/* cv */
const routes: Routes = [
  {
    path: 'monCv',
    redirectTo: 'cv',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'first', component: FirstComponent },
      { path: '', component: RotatingCardComponent },
      { path: 'todo', component: TodoComponent },
      {
        path: 'cv',
        children: [
          { path: '', component: CvComponent },
          { path: 'add', component: AddPersonneComponent },
          { path: ':id', component: DetailPersonneComponent },
        ],
      },
      { path: 'color/:color', component: ColorComponent },
      { path: 'word', component: WordComponent },
    ],
  },
  {
    path: 'admin',
    component: BackComponent,
    children: [{ path: 'second', component: SecondComponent }],
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
