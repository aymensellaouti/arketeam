import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hooks-method',
  templateUrl: './hooks-method.component.html',
  styleUrls: ['./hooks-method.component.css'],
})
export class HooksMethodComponent implements OnInit, DoCheck, OnChanges {
  constructor() {}
  name = 'cc';
  ngOnInit(): void {
    console.log('NgOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCkeck');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
