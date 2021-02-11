import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne = null;
  @Input() height = 50;
  @Input() width = 50;
  @Input() isDiv = true;
  @Output() selectItem = new EventEmitter<Personne>();
  constructor() {}
  ngOnInit(): void {}
  selectPersonne() {
    // emmetre un evenement en y injectant la personne de cet item
    this.selectItem.emit(this.personne);
  }
}
