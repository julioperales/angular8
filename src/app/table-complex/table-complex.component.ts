import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-table-complex',
  templateUrl: './table-complex.component.html',
  styleUrls: ['./table-complex.component.scss']
})

export class TableComplexComponent implements OnInit {

  brews: any;

  displayedColumns: string[] = ['id', 'name', 'country', 'state', 'website_url', 'actions'];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dialog: MatDialog;

  constructor(
    private _http: HttpService,
    private diag: MatDialog

  ) { 

  }

  ngOnInit() {
    this._http.getBeer().subscribe(

      data => {
        this.brews = data;

        this.dataSource = new MatTableDataSource<any>(this.brews);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.brews);
      }
    )

    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDialog(){
    console.log("aqui");

    let diagRef = this.diag.open(DialogComponent, { data: []});
  }

  addNew(){
    console.log("añadir nuevo");
  }

  addItem(){
    console.log("add");
  }

  updateItem(){
    console.log("update");
  }

  deleteItem(){
    console.log("delete");
  }


}
