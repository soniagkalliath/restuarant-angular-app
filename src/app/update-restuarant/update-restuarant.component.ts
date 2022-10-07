import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-update-restuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {

  id: any
  rName: any
  neighborhood: any
  photograph: any
  Monday: any
  Tuesday: any
  Wednesday: any
  Thursday: any
  Friday: any
  Saturday: any
  Sunday: any
  address:any
  lat:any
  lng:any
  cuisine_type:any
  rvname:any
  date:any
  rating:any
  comments:any
  reviewArray:any = [] 

  restId:any;
  restBody:any;
  constructor(private activatedRoute:ActivatedRoute,
    private restService:RestuarantApiService) { }

  ngOnInit(): void {
    // get restuarant id
    this.activatedRoute.params.subscribe((data)=>{
         this.restId = data['id']
     })

     //get restuarant detail
     this.restService.viewRestuarant(this.restId)
     .subscribe((result)=>{
    this.restBody = result
           console.log(this.restBody);
     })

  }

  updateRestuarant(){
    alert('update click');
  }
}
