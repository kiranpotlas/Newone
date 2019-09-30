import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DonateComponent } from './donate/donate.component';
import { OurImpactComponent } from './our-impact/our-impact.component';
import { FormsModule } from '@angular/forms';
const orphanRouter:Routes=[
{path:'donate',component:DonateComponent},
{path:'our-Impact',component:OurImpactComponent}
];
@NgModule({
  declarations: [DonateComponent,OurImpactComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(orphanRouter)
  ],
  exports:[RouterModule]
})
export class OrphanageModule { }
