import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  addPersonne(personne: Personne) {
    if (this.cvService.addCv(personne)) {
      this.toaster.success(
        `${personne.firstname} ${personne.name} a été ajouté avec succès`
      );
      this.router.navigate(['cv']);
    } else {
      this.toaster.error(
        `Problème lors de l'ajout, veuillez contacter l'admin`
      );
    }
  }
}
