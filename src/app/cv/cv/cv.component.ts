import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoService } from 'src/app/todo/services/todo.service';
import { Personne } from './../model/personne';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = null;
  nbClic = 0;
  personne: Personne = null;
  constructor(
    private loggerService: LoggerService,
    private helperService: HelperService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.helperService.sayHello();
    this.loggerService.logger('cc je suis le CvComponent');
    this.personne = this.cvService.personne;
    this.cvService.selectItemSubject
      .pipe(distinctUntilChanged())
      .subscribe((personne) => this.nbClic++);
  }
  updatePersonne() {}
  getSelectedPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
