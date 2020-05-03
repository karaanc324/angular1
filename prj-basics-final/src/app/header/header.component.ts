import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() headerEvent = new EventEmitter<string>();

  headerClicked(receieved: string) {
    this.headerEvent.emit(receieved);
  }
}
