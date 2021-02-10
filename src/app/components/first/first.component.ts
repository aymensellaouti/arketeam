import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  firstname: string;
  name = 'Samuel';
  isHidden = false;
  message = '';
  /*
    attributs
    méthodes
  */
  constructor() {}

  ngOnInit(): void {}
  sayCc() {
    alert('cc :D');
  }
  afficherCacher(): void {
    this.isHidden = !this.isHidden;
  }
  chanegMessage(newMessage: string): void {
    this.message = newMessage;
  }
}
