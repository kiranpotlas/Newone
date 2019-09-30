import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { SpiritualCentersModule } from './spiritual-centers/spiritual-centers.module';
import { CommonModule } from '@angular/common';
import { PriestCentersModule } from './priest-centers/priest-centers.module';
import { PriestCentersComponent } from './priest-centers/priest-centers.component';
import { OrphanageModule } from './orphanage/orphanage.module';
import { OrphanageComponent } from './orphanage/orphanage.component';
import { OldageHomesModule } from './oldage-homes/oldage-homes.module';
import { OldageHomesComponent } from './oldage-homes/oldage-homes.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SpiritualCentersComponent } from './spiritual-centers/spiritual-centers.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const appRoute: Routes = [
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'navigation',component:NavigationComponent},
  {path:'oldagehome',component:OldageHomesComponent},
  {path:'orphanage',component:OrphanageComponent},
  {path:'priestCenter',component:PriestCentersComponent},
  {path:'spiritualCenter',component:SpiritualCentersComponent},
  {path:'aboutUs',component:AboutComponent},
  {path:'contactUs',component:ContactUsComponent}
];

@NgModule({
  declarations:[OldageHomesComponent,PriestCentersComponent,OrphanageComponent,SpiritualCentersComponent],
  imports: [CommonModule,FormsModule,OldageHomesModule,SpiritualCentersModule,PriestCentersModule,OrphanageModule,RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
