import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addNewServer=false;
  serverCreationStatus = 'No server was created! To create click on ADD server Button';
  serverName = '';
  constructor() { 
    setTimeout(() => {
      this.addNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
