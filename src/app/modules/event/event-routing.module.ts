import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDashboardComponent } from './pages/event-dashboard/event-dashboard.component';

// remind: /event defined in app-routing.module
const routes: Routes = [
  { path: '', component: EventDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
