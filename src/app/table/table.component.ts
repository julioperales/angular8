import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  brews: Object;
  
  displayedColumns: string[] = ['id','name', 'country', 'state', 'website_url'];

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this._http.getBeer().subscribe(

      data => {
        this.brews = data
        console.log(this.brews);
      }
    )
  }

}
