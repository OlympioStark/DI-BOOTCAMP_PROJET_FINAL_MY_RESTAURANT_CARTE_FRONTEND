import { NgModule } from "@angular/core";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, tuiSvgOptionsProvider, TuiButtonModule } from "@taiga-ui/core";
import { ReactiveFormsModule} from '@angular/forms';
import { TuiInputModule, TuiInputPasswordModule, TuiInputPhoneInternationalModule, TuiSortCountriesPipeModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {TuiCarouselModule, TuiIslandModule} from '@taiga-ui/kit';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef  } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardRoutingModule } from "./routes/dashboard-routing.module";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselDashboardComponent } from './components/shared/carousel-dashboard/carousel-dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { AlertModifsComponent } from './alerts/alert-modifs/alert-modifs.component';
import { AlertCreationComponent } from './alerts/alert-creation/alert-creation.component';
import { AlertSuppressionComponent } from './alerts/alert-suppression/alert-suppression.component';
import { AlertDeconnexionComponent } from './alerts/alert-deconnexion/alert-deconnexion.component';
import { AuthLayoutModule } from "./modules/auth.layout.module";
import { GestionLayoutModule } from "./modules/gestion.layout.module";
import { AdminLayoutModule } from "./modules/admin.layout.module";
import { AccueilComponent } from './components/accueil/accueil.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselDashboardComponent,
    NotFoundComponent,
    SearchFilterPipe,
    AlertModifsComponent,
    AlertCreationComponent,
    AlertSuppressionComponent,
    AlertDeconnexionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
    AdminLayoutModule,
    AuthLayoutModule,
    GestionLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
/* 
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
    MatDialogModule,*/
    HttpClientModule 
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
