import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoaderService } from '../../../services/loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
 
  isLoading: Observable<boolean> = this.loaderService.isLoading;

  constructor(public loaderService: LoaderService){}


}


