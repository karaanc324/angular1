import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComp } from './app-routing.module'; 
import { NullCheckDirective } from './directives/null.check.directive';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComp,
    NullCheckDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
