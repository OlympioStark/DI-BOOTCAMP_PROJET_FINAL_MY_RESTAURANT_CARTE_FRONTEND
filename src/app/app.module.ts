import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, tuiSvgOptionsProvider, TuiButtonModule } from "@taiga-ui/core";
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {TuiCarouselModule, TuiIslandModule} from '@taiga-ui/kit';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CarouselDashboardComponent } from './components/shared/carousel-dashboard/carousel-dashboard.component';
import { NgModule } from "@angular/core";
import { IndexComponent } from './pages/admin/index/index.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InvitationComponent } from './pages/invitation/invitation.component';
import { ObservationComponent } from './pages/observation/observation.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    NavbarComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    CarouselDashboardComponent,
    NotFoundComponent,
    InvitationComponent,
    ObservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiCarouselModule,
    TuiIslandModule
],
  providers: [
    {
      provide: TUI_SANITIZER, 
      useClass: NgDompurifySanitizer
    },
    tuiSvgOptionsProvider({
      srcProcessor: src => {
          const myCustomPrefix = 'icons8::';
          return String(src).startsWith(myCustomPrefix)
              ? `assets/icons8/${String(src).replace(myCustomPrefix, '')}.svg`
              : src;
      },
    }),
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
