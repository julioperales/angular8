import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.scss']
})
export class UpdatedialogComponent implements OnInit {

  title: string = "Update";
  message: string = "";
  cancelButtonText = "Cancel";
  confirmButtonText = "Update";
  item: any;
  local_data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<UpdatedialogComponent>
    ) {

    if (data) {
      this.title = data.title || this.title;
      this.message = data.message || this.message;

      this.local_data = {...data.item};


      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('600vw', '600vw');
  }

  onConfirmClick(): void {        
    this.dialogRef.close({confirmed: true, data: this.local_data});
  }

  ngOnInit() {

  }




}
