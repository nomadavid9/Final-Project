import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PortfolioServiceService {

  constructor(private _http: HttpClient) { }

}
