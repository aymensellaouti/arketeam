import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css']
})
export class RotatingCardComponent implements OnInit {
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'Associate professor';
  age = 38;
  path = 'rotating_card_profile3.png';
  constructor() { }

  ngOnInit(): void {
  }

}
