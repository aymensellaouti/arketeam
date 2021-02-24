import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BackComponent } from './component/back/back.component';
import { FrontComponent } from './component/front/front.component';
import { ColorComponent } from './pages/color/color.component';
import { FirstComponent } from './components/first/first.component';
import { NF404Component } from './components/nf404/nf404.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { SecondComponent } from './components/second/second.component';
import { WordComponent } from './pages/word/word.component';
import { LoginComponent } from './pages/login/login.component';
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
        loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
      },
      { path: 'color/:color', component: ColorComponent },
      { path: 'word', component: WordComponent },
      { path: 'login', component: LoginComponent },
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
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
