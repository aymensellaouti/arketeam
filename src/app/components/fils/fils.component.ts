import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Output() sendMessageToDad = new EventEmitter();
  message = '';
  constructor() {}
  ngOnInit(): void {}
  sendMessage() {
    this.sendMessageToDad.emit(this.message);
  }
}
