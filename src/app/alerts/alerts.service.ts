import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertCreationComponent } from './alert-creation/alert-creation.component';
import { AlertDeconnexionComponent } from './alert-deconnexion/alert-deconnexion.component';
import { AlertModifsComponent } from './alert-modifs/alert-modifs.component';
import { AlertSuppressionComponent } from './alert-suppression/alert-suppression.component';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private dialog: MatDialog) { }

  enregistrer() {
    return this.dialog.open(AlertCreationComponent, {
      width: '300px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px'},
    })
  }

  modifier() {
    return this.dialog.open(AlertModifsComponent, {
      width: '300px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px'},
    })
  }

  supprimer() {
    return this.dialog.open(AlertSuppressionComponent, {
      width: '300px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px'},
    })
  }

  deconnexion(mes: any) {
    return this.dialog.open(AlertDeconnexionComponent, {
      width: '300px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px'},
      data: {
        message : mes
      }
    })
  }

}
