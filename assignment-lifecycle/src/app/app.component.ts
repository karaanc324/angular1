import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-lifecycle';
  @Output() counter: number
  isEven: boolean
  isOdd: boolean

  countReceived(count: number) {
    this.counter = count
    if(count % 2 === 0) {
      this.isEven = true;
      this.isOdd = false;
    } else {
      this.isEven = false;
      this.isOdd = true;
    }
  }
}
