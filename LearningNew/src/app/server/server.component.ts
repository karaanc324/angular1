import { Component } from '@angular/core';

@Component({
    // configuration   metadata for the class
    // selector should be specific, anyThing
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverID = 10;
    serverStatus = "offline";

    getServerStatus() {
        return this.serverStatus
    }
}