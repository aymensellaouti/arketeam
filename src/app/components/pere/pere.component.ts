import { Component, OnInit } from '@angular/core';
import { Personne } from './../../cv/model/personne';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent implements OnInit {
  constructor() {}
  personne = new Personne(
    1,
    'sellaouti',
    'aymen',
    'teacher',
    'as.jpg',
    1234,
    38
  );
  ngOnInit(): void {
    console.log(this.personne);
  }
  processSonMessage(message: string): void {
    alert(message);
  }
}
