import { Inject, Injectable } from '@angular/core';

// @Injectable()
export class UserService {
    
    users= [{}] ;

    // setUser(userData:{name: string, pass: string}) {
        setUser(username: string, password: string){
        this.users.push({
          name: username,
          password: password
        })
      }
}