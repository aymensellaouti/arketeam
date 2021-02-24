import { NgModule } from '@angular/core';
import { CvComponent } from './cv/cv.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { DetailPersonneComponent } from './detail-personne/detail-personne.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  declarations: [
    CvComponent,
    ItemComponent,
    ListComponent,
    CardComponent,
    DefaultImagePipe,
    DetailPersonneComponent,
    AddPersonneComponent,
    EmbaucheComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
          { path: '', component: CvComponent },
          {
            path: 'add',
            component: AddPersonneComponent,
            canActivate: [AuthGuard],
          },
          { path: ':id', component: DetailPersonneComponent },
    ]),
  ],
})
export class CvModule {}
