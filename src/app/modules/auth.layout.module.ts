import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterComponent } from '../pages/auth/register/register.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule, TuiInputPhoneInternationalModule, TuiSortCountriesPipeModule, TuiTextAreaModule, TuiCarouselModule, TuiIslandModule } from '@taiga-ui/kit';
import { AuthRoutingModule } from '../routes/auth-routing.module';




@NgModule({
  imports : [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiInputPhoneInternationalModule,
    TuiSortCountriesPipeModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiCarouselModule,
    TuiIslandModule,
    MatDialogModule,
    AuthRoutingModule
  ],
  declarations : [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthLayoutModule {

}