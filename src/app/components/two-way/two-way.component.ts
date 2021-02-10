import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css'],
})
export class TwoWayComponent implements OnInit {
  two = 'contenu par défaut';
  constructor() {}

  ngOnInit(): void {}

  default() {
    this.two = 'default';
  }
}
