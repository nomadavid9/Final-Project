import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { ChartsModule } from 'ng2-charts';
import { ROUTING } from "./app.routing";

import { AppComponent } from './app.component';
import { RegisterComponent } from "./register/register.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SampleChartComponent } from './sample-chart/sample-chart.component';


import { ApiCallService } from './api-call.service';
import { UserService } from './user.service';
import { ChartComponent } from './chart/chart.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        RegisterComponent,
        LogInComponent,
        SampleChartComponent,
        ChartComponent,
        GraphComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ClarityModule,
        ChartsModule,
        ROUTING
    ],
    providers: [ApiCallService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
