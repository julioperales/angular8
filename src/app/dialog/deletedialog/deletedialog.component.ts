import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent implements OnInit {

  title: string = "Delete";
  message: string = "";
  cancelButtonText = "Cancel";
  confirmButtonText = "Delete";

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeletedialogComponent>) {

    if (data) {
      this.title = data.title || this.title;
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300vw', '300vw');
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  ngOnInit() {
  }

}
