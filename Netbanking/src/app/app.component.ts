import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Netbanking';
  // element: {name: string, password: string};
  users= [{}] ;
  signup: boolean;
  userShow: boolean;
  userBtnStatus= 'Show Users'
  count = 0;
  // setUser(userData:{name: string, pass: string}) {
  //   console.log("username: ", userData.name, userData.pass)
  //   this.users.push({
  //     name: userData.name,
  //     password: userData.pass
  //   })
  // }

  ngOnInit() {
    this.users = this.userService.users
  }

  constructor(private userService: UserService) {}
  showSignupPage() {
    this.signup = true
  }

  showLoginPage() {
    this.signup = false
  }

  showUsers() {
    if(this.count == 0) {
      this.userShow = true
      this.count = 1;
      this.userBtnStatus = 'Hide Users'
    } else {
      this.userShow = false
      this.count = 0;
      this.userBtnStatus = 'Show Users'
    }
    

  }

}
