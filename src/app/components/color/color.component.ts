import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'lightblue';
  color: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesParams) => {
      this.color = mesParams.color;
    });
    /*     this.color = this.defaultColor; */
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
}
