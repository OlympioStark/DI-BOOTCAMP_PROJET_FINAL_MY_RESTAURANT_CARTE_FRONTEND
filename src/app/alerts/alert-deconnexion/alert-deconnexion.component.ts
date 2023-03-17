import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-deconnexion',
  templateUrl: './alert-deconnexion.component.html',
  styleUrls: ['./alert-deconnexion.component.css']
})
export class AlertDeconnexionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogueRef: MatDialogRef<AlertDeconnexionComponent>) {}

  ngOnInit(): void {
  }

  closeDialogue() {
    this.dialogueRef.close(false);
  }


}

