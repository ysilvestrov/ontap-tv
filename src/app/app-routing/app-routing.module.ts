import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {ShowTaplistComponent} from '../show-taplist/show-taplist.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: ':id', component: ShowTaplistComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
