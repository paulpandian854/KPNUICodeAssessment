import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

//Methods to make a service call to the URL
@Injectable()
export class AppService {
    constructor(private http: Http) {

    }

    //Service call to API to get login details
    getLoginDetails(userName: string): Observable<any> {
        //Url is fetched from constant file
        const url = `${environment.jwt}/${userName}`;
        return this.http.get(url).pipe(map((response: any) => {
            return response
        }),
            catchError(error => {
                return this.handleError(error);
            }))
    }

    //Servce call to call the API to get Station Details
    getStationDetails(jwt: string): Observable<any> {
        //Url is fetched from constant file
        const url = `${environment.station_url}/${jwt}`;
        return this.http.get(url).pipe(map((response: any) => {
            return response
        }),
            catchError(error => {
                return this.handleError(error);
            }))

    }

    handleError(error: any) {
        return of(error);
    }

    bodyParser(response: any) {
        return JSON.parse(response);
    }

    //Get Departure details
    getDepartureDetails(station: string, auth: string): Observable<any> {
        //Url is fetched from constant file
        const url = `${environment.departure_url}/${station}/${auth}`;
        return this.http.get(url).pipe(map((response: any) => {
            return response
        }),
            catchError(error => {
                return this.handleError(error);
            }))
    }

}