/* tslint:disable:no-unused-variable */
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { ClarityModule } from "@clr/angular";
import { ROUTING } from "./app.routing";
import { APP_BASE_HREF } from "@angular/common";

describe('AppComponent', () => {

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                LogInComponent,
                RegisterComponent,
                SearchBarComponent,
                PortfolioComponent,
                ChartComponent,
                TableComponent
            ],
            imports: [
                ClarityModule.forRoot(),
                ROUTING
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });

        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;


    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the app', async(() => {
        expect(compiled).toBeTruthy();
    }));


});
