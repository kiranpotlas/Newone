import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationComponent } from './duration/duration.component';
import { LocatedComponent } from './located/located.component';
import { RoomRegistrationComponent } from './room-registration/room-registration.component';
import {RouterModule,Routes} from '@angular/router'
import { FormsModule } from '@angular/forms';

const spiritCenter:Routes=[
  {path:'duration',component:DurationComponent},
  {path:'located',component:LocatedComponent},
  {path:'room-registraion',component:RoomRegistrationComponent}
];
@NgModule({
  declarations: [DurationComponent,LocatedComponent,RoomRegistrationComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(spiritCenter)
  ],
  exports:[RouterModule]
})
export class SpiritualCentersModule { }
