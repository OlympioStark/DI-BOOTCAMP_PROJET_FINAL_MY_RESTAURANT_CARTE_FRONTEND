import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-creation',
  templateUrl: './alert-creation.component.html',
  styleUrls: ['./alert-creation.component.css']
})
export class AlertCreationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogueRefs: MatDialogRef<AlertCreationComponent>) {}

  ngOnInit(): void {
  }

  closeDialogue() {
    this.dialogueRefs.close(false);
  }

}
