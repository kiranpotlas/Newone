import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonationsComponent } from './donations/donations.component';
import { JoinComponent } from './join/join.component';
import { FormsModule } from '@angular/forms';
const oldageRouter:Routes=[
{path:'about-Us',component:AboutUsComponent},
{path:'donations',component:DonationsComponent},
{path:'join',component:JoinComponent}
];
@NgModule({
  declarations: [AboutUsComponent,DonationsComponent,JoinComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(oldageRouter)
  ],
  exports:[RouterModule]
})
export class OldageHomesModule { }
