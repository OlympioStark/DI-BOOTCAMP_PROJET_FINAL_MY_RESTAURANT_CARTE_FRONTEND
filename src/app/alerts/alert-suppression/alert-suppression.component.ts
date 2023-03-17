import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertCreationComponent } from '../alert-creation/alert-creation.component';

@Component({
  selector: 'app-alert-suppression',
  templateUrl: './alert-suppression.component.html',
  styleUrls: ['./alert-suppression.component.css']
})
export class AlertSuppressionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogueRefs: MatDialogRef<AlertCreationComponent>) {}

  ngOnInit(): void {
  }

  closeDialogue() {
    this.dialogueRefs.close(false);
  }
}
