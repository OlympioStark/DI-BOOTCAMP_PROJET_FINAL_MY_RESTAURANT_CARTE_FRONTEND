import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-alert-modifs',
  templateUrl: './alert-modifs.component.html',
  styleUrls: ['./alert-modifs.component.css']
})
export class AlertModifsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogueRefs: MatDialogRef<AlertModifsComponent>) {}

  ngOnInit(): void {
  }

  closeDialogue() {
    this.dialogueRefs.close(false);
  }
}
