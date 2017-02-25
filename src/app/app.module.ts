import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlistingsComponent } from './flistings/flistings.component';
import { AuthComponent } from './authentications/auth/auth.component';
import { SigninComponent } from './authentications/signin/signin.component';
import { SignupComponent } from './authentications/signup/signup.component';
import { LogoutComponent } from './authentications/logout/logout.component';
import { FlistingFormComponent } from './flisting-form/flisting-form.component';
import { FlistingDetailsComponent } from './flisting-details/flisting-details.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    FlistingsComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    FlistingFormComponent,
    FlistingDetailsComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
