import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from '../logging.service';
import { AccountsService } from '../accounts.service';
// import { LogginService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogginService],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LogginService, private acountsService: AccountsService) {
    this.acountsService.statusUpdate.subscribe(
      (status: string) => alert('New Status '+ status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    
    // const service = new LogginService();
    // service.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
    this.acountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
