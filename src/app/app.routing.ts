/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
 
 //Routing imports
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

//import components to be routed to.
import { AboutComponent } from './about/about.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

/*This step sets up the routes, matches the url route to 
the component to be activated upon routing*/
export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: SearchBarComponent},
    {path: 'about', component: AboutComponent}
];

//This is just part of the routing step, don't NEED to know this per se.
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
