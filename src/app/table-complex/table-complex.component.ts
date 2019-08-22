import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-complex',
  templateUrl: './table-complex.component.html',
  styleUrls: ['./table-complex.component.scss']
})
export class TableComplexComponent implements OnInit {

  brews: any;

  displayedColumns: string[] = ['id', 'name', 'country', 'state', 'website_url'];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _http: HttpService
  ) { }

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

}
