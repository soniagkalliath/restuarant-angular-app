import { Component, OnInit } from '@angular/core';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {

  //restName="Resto cafe Cochin"
  restuarantLists:any;

  constructor(private restApi:RestuarantApiService) { }

  ngOnInit(): void {
    //asynchronous
    this.restApi.allRestuarantsList()
    .subscribe((result)=>{
      console.log(result);  
      this.restuarantLists = result
    })
  }

}
