import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, tuiSvgOptionsProvider, TuiButtonModule } from "@taiga-ui/core";
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule, TuiInputPasswordModule, TuiInputPhoneInternationalModule, TuiSortCountriesPipeModule } from '@taiga-ui/kit';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {TuiCarouselModule, TuiIslandModule} from '@taiga-ui/kit';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef  } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardRoutingModule } from "./routes/dashboard-routing/dashboard-routing.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CarouselDashboardComponent } from './components/shared/carousel-dashboard/carousel-dashboard.component';
import { IndexComponent } from './pages/admin/index/index.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InvitationComponent } from './pages/invitation/invitation.component';
import { ObservationComponent } from './pages/observation/observation.component';
import { GestionnaireComponent } from './pages/gestionnaire/gestionnaire.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { AlertModifsComponent } from './alerts/alert-modifs/alert-modifs.component';
import { AlertCreationComponent } from './alerts/alert-creation/alert-creation.component';
import { AlertSuppressionComponent } from './alerts/alert-suppression/alert-suppression.component';
import { AlertDeconnexionComponent } from './alerts/alert-deconnexion/alert-deconnexion.component';
import { RestaurantComponent } from "./pages/admin/restaurant/restaurant.component";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    NavbarComponent,
    DashboardComponent,
    IndexComponent,
    RestaurantComponent,
    RegisterComponent,
    LoginComponent,
    CarouselDashboardComponent,
    NotFoundComponent,
    InvitationComponent,
    ObservationComponent,
    GestionnaireComponent,
    SearchFilterPipe,
    AlertModifsComponent,
    AlertCreationComponent,
    AlertSuppressionComponent,
    AlertDeconnexionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    /* DashboardRoutingModule, */
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
    TuiButtonModule,
    TuiCarouselModule,
    TuiIslandModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
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
