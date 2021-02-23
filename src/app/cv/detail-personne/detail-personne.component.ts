import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../model/personne';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.personne = this.cvService.getCvById(params.id);
      if (!this.personne) {
        this.router.navigate(['cv']);
      }
    });
  }
  delete() {
    if (this.cvService.deleteCv(this.personne)) {
      this.toaster.success(`La personne a été supprimé avec succès`);
      this.router.navigate(['cv']);
    } else {
      this.toaster.error(`Problème veuillez contacter l'admin`);
    }
  }
}
