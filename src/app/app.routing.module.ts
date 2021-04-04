import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAvailabilityComponent } from './view-availability/view-availability.component';

const routes: Routes = [
  { path: '', redirectTo: 'check-availability', pathMatch: 'full' },
  { path: 'view-availabilty', component: ViewAvailabilityComponent },
  { path: 'check-availability', component: CheckAvailabilityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }