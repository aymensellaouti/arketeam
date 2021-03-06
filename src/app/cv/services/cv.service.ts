import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Personne } from './../model/personne';

const PERSONNE_API_LINK =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';
@Injectable({
  providedIn: 'root',
})
export class CvService {
  personnes: Personne[] = [];
  selectItemSubject = new Subject<Personne>();
  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 1234, 38),
      new Personne(2, 'Atouillant', 'Mathieu', 'Dev', '', 1234, 17),
      new Personne(3, 'Atouillant', 'Mathieu', 'Dev', '', 1234, 17),
    ];
  }
  personne = new Personne();
  getFakeCvs(): Personne[] {
    return this.personnes;
  }

  getCvs(): Observable<Personne[]> {
    return this.http.get<Personne[]>(PERSONNE_API_LINK);
  }

  getFakeCvById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === +id);
  }

  getCvById(id: number): Observable<Personne> {
    return this.http.get<Personne>(PERSONNE_API_LINK + id);
  }

  deleteFakeCv(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      return false;
    }
    this.personnes.splice(index, 1);
    return true;
  }

  deleteCvById(id: number): Observable<unknown> {
    return this.http.delete<unknown>(PERSONNE_API_LINK + id);
  }
  addCv(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(PERSONNE_API_LINK, personne);
  }

  selectItem(personne) {
    // va informer tous les membres inscrits qu'une personne a été selectionné
    this.selectItemSubject.next(personne);
  }
}
