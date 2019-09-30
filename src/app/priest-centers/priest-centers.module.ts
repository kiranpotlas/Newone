import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const priestRoutes:Routes=[
  {path:'news',component:NewsComponent},
  {path:'photos',component:PhotosComponent},
  {path:'videos',component:VideosComponent}
]
@NgModule({
  declarations: [NewsComponent,PhotosComponent,VideosComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(priestRoutes)
  ],
  exports:[RouterModule]
})
export class PriestCentersModule { }
