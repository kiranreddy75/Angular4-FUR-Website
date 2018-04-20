import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Phase2Component } from './phase2/phase2.component';

import { NotFoundComponent } from './not-found/not-found.component';





const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'main', component:MainComponent},
    {path:'about', component:AboutComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'phase2', component:Phase2Component},   
    {path:'**', component:NotFoundComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
export const routingComponents = [MainComponent,AboutComponent,Phase2Component,GalleryComponent,NotFoundComponent]