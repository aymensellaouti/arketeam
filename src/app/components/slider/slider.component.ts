import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() width = 150;
  @Input() heigth = 150;
  @Input() paths = [
    'as.jpg',
    '404.png',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  path = this.paths[0];
  sliderObservable: Observable<string> = null;
  constructor() {}

  ngOnInit(): void {
    this.sliderObservable = new Observable<string>((observer) => {
      let i = 0;
      setInterval(() => {
        if (i === this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, 1000);
    });
    this.sliderObservable.subscribe((newPath) => (this.path = newPath));
  }
}
