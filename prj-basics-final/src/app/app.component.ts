import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reciepeEvent: boolean;
  shoppingEvent: boolean;

  headerEventReceieved(receieved: string) {
    if(receieved === 'recipe') {
      this.reciepeEvent = true;
      this.shoppingEvent = false;
    } else {
      this.reciepeEvent = false;
      this.shoppingEvent = true;
    }
  }
}
