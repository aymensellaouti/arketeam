import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = null;
  constructor(
    private loggerService: LoggerService,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.helperService.sayHello();
    this.loggerService.logger('cc je suis le CvComponent');
  }

  getSelectedPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
