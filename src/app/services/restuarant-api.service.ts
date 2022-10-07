import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestuarantApiService {

  constructor(private api:HttpClient) { }

  //get all restuarant details Api call
  allRestuarantsList(){
    // api call
   return this.api.get('http://localhost:3000/restaurants')
  }

  //get only user requested restuarant
  viewRestuarant(restId:any){
   return this.api.get('http://localhost:3000/restaurants/'+restId)
  }

  //add a new restuarant api - post
  addRestuarant(restBody:any){
    return this.api.post('http://localhost:3000/restaurants'
    ,restBody)
  }

}
