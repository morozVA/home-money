import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Bill} from "../models/bill.model";
import {BaseApi} from "../../../shared/core/base.api";

@Injectable()

export class BillService extends BaseApi{

  constructor(public http: Http){
    super(http);
  }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  getCurrency(): Observable<any>{
    return this.http.get('http://data.fixer.io/api/latest?access_key=adf371feae5fd7e484973b1fa6bb25e7&symbols=USD,AUD,CAD,PLN,BYN&format=1')
      .map((response: Response) => response.json());
  }

}
