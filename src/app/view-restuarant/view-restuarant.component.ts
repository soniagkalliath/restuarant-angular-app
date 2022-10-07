import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-view-restuarant',
  templateUrl: './view-restuarant.component.html',
  styleUrls: ['./view-restuarant.component.css']
})
export class ViewRestuarantComponent implements OnInit {

  restId:any
  restBody:any
  constructor(private activatedRoute:ActivatedRoute,
    private restService:RestuarantApiService) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']
     })

     //api call
     this.restService.viewRestuarant(this.restId)
     .subscribe((result)=>{
    this.restBody = result
           console.log(this.restBody);
     })

  }

}
