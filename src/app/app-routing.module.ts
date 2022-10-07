import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';

const routes: Routes = [
  //path for RestuarantsListComponent
  {
    path:'', component:RestuarantsListComponent
  },
  //path for ViewRestuarantComponent
  {
    path:'view-restuarant/:id' ,component:ViewRestuarantComponent
  },
  //path for AddRestuarantComponent
  {
    path:'add-restuarant', component:AddRestuarantComponent
  },
  //path for UpdateRestuarantComponent
  {
    path:'update-restuarant/:id' , component:UpdateRestuarantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
