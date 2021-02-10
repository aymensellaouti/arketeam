import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'lightblue';
  color: string = '';
  constructor() {}

  ngOnInit(): void {
    this.color = this.defaultColor;
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
}
