import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  listPersonne$ = null;
  constructor(private cvService: CvService, private toaster: ToastrService) {}

  ngOnInit(): void {
    this.listPersonne$ = this.cvService.getCvs().pipe(
      catchError((erreur) => {
        this.toaster.warning(
          `Problème d'accès au serveur, les données sont fake`
        );
        return of(this.cvService.getFakeCvs);
      })
    );
  }
}
