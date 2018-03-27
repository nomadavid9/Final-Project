//Routing imports
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

//import components to be routed to.
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StockDataComponent } from './stock-data/stock-data.component';


/*This step sets up the routes, matches the url route to 
the component to be activated upon routing*/
export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LogInComponent},
    {path: 'search', component: SearchBarComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'stock-data', component: StockDataComponent}
];

//This is just part of the routing step, don't NEED to know this per se.
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
