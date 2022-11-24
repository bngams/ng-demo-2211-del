import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventDashboardComponent } from './pages/event-dashboard/event-dashboard.component';


@NgModule({
  declarations: [
    EventDashboardComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
