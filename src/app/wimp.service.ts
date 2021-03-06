import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/expand';
import 'rxjs/add/observable/empty';

@Injectable()
export class WimpService {

    private baseUrl = 'http://localhost:8080/api/'


    constructor (private http: Http) {}


    getRecords(endpoint: string): Observable<any[]> {
      let apiUrl = this.baseUrl+endpoint;
      return this.http.get(apiUrl)
          .map(this.extractData)
          .catch(this.handleError);
    }

    addRecord(endpoint: string, record:object): Observable<any> {
      let apiUrl = `${this.baseUrl}${endpoint}`;
      console.log(apiUrl)
      return this.http.post(apiUrl, record)
          .map(this.extractData);
    }


    private extractData(res: Response) {
        let results = res.json();
        return results || [];
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if(typeof error._body === "string"){
            errMsg = error._body
        }else{
            if (error instanceof Response) {
                if(error.status === 0){
                    errMsg = "Error connecting to API"
                }else{
                    const errorJSON = error.json();
                    errMsg = errorJSON.message;
                }
            }
        }

        return Observable.throw(errMsg);
    }


}