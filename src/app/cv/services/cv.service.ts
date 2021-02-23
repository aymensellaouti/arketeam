import { Injectable } from '@angular/core';
import { Personne } from './../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  personnes: Personne[] = [];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 1234, 38),
      new Personne(2, 'Atouillant', 'Mathieu', 'Dev', '', 1234, 17),
      new Personne(3, 'Atouillant', 'Mathieu', 'Dev', '', 1234, 17),
    ];
  }

  getCvs(): Personne[] {
    return this.personnes;
  }

  getCvById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === +id);
  }

  deleteCv(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      return false;
    }
    this.personnes.splice(index, 1);
    return true;
  }
}
