import { Component, OnDestroy, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../model/personne';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit, OnDestroy {
  personne: Personne = null;
  paramsSubscription: Subscription = null;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.cvService.getCvById(params.id).subscribe(
        (personne) => (this.personne = personne),
        (erreur) => this.router.navigate(['cv'])
      );
    });
  }
  delete() {
    this.cvService.deleteCvById(this.personne.id).subscribe(
      (success) => {
        this.toaster.success(`La personne a été supprimé avec succès`);
        this.router.navigate(['cv']);
      },
      (erreur) => this.toaster.error(`Problème veuillez contacter l'admin`)
    );
  }

  ngOnDestroy() {
    console.log('Destruction de detailComponent');

    this.paramsSubscription.unsubscribe();
  }
}
