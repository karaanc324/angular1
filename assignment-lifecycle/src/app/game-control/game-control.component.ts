import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() myEvent = new EventEmitter<number>();
  counter: number = 0
  startClicked: boolean = false
  stopClicked: boolean = true
  setInter

  constructor() { }

  ngOnInit(): void {
  }

  onStartClicked() {
    this.myEvent.emit()
    this.setInter = setInterval(() => { this.myEvent.emit(this.counter++)
    }, 500)
    this.startClicked = true
    this.stopClicked = false
  }

  onStopClicked() {
    clearInterval(this.setInter)
    this.counter = 0
    this.startClicked = false
    this.stopClicked = true
  }
  
}
