import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 1234, 38),
      new Personne(
        2,
        'Atouillant',
        'Mathieu',
        'Dev',
        'rotating_card_profile2.png',
        1234,
        17
      ),
      new Personne(
        3,
        'Atouillant',
        'Mathieu',
        'Dev',
        'rotating_card_profile2.png',
        1234,
        17
      ),
    ];
  }
  forwardItem(personne: Personne) {
    this.forwardPersonne.emit(personne);
  }
}
