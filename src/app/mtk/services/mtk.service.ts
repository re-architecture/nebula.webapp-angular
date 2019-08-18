import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScrapForm } from '../model/scrap-form';
import { map, tap } from 'rxjs/operators';

import { createRequestOption } from './request-util';
import { Material } from '../model/material';

@Injectable()
export class MTKService {

  constructor(private http: HttpClient) { }

  findScrapForm(formStatus = 'All',
    product = 'All',
    shift = 'All',
    costCenter = 'All',
    sort = '',
    sortDirection = 'asc',
    pageNumber = 0,
    pageSize = 10): Observable<HttpResponse<ScrapForm[]>> {

    let options: HttpParams = new HttpParams();

    let doSort: string = "";

    if (sort !== '') {
      doSort = sort;
      if (sortDirection !== '') {
        doSort += "," + sortDirection;
      }
    }
    options = options.set('page', pageNumber.toString())
    options = options.set('size', pageSize.toString())
    options = options.set('sort', doSort)
    options = options.set('formStatus', formStatus)
    options = options.set('product', product)
    options = options.set('shift', shift)
    options = options.set('costCenter', costCenter)


    /*     params: new HttpParams()
        .set('filter', filter)
        .set('sort', doSort)
    
        .set('page', pageNumber.toString())
        .set('size', pageSize.toString())
    , */


    return this.http.get<ScrapForm[]>('http://127.0.0.1:8080/api/scrapform', { params: options, observe: 'response' });

    /*  .pipe(
       map(res => res["payload"])
     ); */
  }

  getScrapFormByID(id: number): Observable<ScrapForm> {

    const url = `http://127.0.0.1:8080/api/scrapform/${id}`;

    return this.http.get<ScrapForm>(url).pipe(
      //tap(_ => console.log(`fetched scrapform id=${id}`))
      //catchError(this.handleError<Hero>(`getHero id=${id}`)
    );
  }

  getMaterialByFormID(fomrID: number): Observable<Material[]> {
    const url = `http://127.0.0.1:8080/api/material/${fomrID}`;
    return this.http.get<Material[]>(url);
  }

  getMonthArrayByCurrentDate(): Array<String> {

    let MonthArray: Array<String>;

    const theMonthIndex = (new Date()).getMonth();

    const endYear = (new Date()).getFullYear();
    const beginYear = endYear - 1;

    switch (theMonthIndex) {
      case 0:
        MonthArray = ['JAN-' + beginYear, 'FEB-' + beginYear, 'MAR-' + beginYear, 'APR-' + beginYear, 'MAY-' + beginYear, 'JUN-' + beginYear, 'JUL-' + beginYear, 'AUG-' + beginYear, 'SEP-' + beginYear, 'OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear];
        break;
      case 1:
        MonthArray = ['FEB-' + beginYear, 'MAR-' + beginYear, 'APR-' + beginYear, 'MAY-' + beginYear, 'JUN-' + beginYear, 'JUL-' + beginYear, 'AUG-' + beginYear, 'SEP-' + beginYear, 'OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear];
        break;
      case 2:
        MonthArray = ['MAR-' + beginYear, 'APR-' + beginYear, 'MAY-' + beginYear, 'JUN-' + beginYear, 'JUL-' + beginYear, 'AUG-' + beginYear, 'SEP-' + beginYear, 'OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear];
        break;
      case 3:
        MonthArray = ['APR-' + beginYear, 'MAY-' + beginYear, 'JUN-' + beginYear, 'JUL-' + beginYear, 'AUG-' + beginYear, 'SEP-' + beginYear, 'OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear, 'MAR-' + endYear];
        break;
      case 4:
        MonthArray = ['MAY-' + beginYear, 'JUN-' + beginYear, 'JUL-' + beginYear, 'AUG-' + beginYear, 'SEP-' + beginYear, 'OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear, 'MAR-' + endYear, 'APR-' + endYear];
        break;
      case 5:
        MonthArray = ['JUN-' + beginYear, 'JUL-' + beginYear, 'AUG-' + beginYear, 'SEP-' + beginYear, 'OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear, 'MAR-' + endYear, 'APR-' + endYear, 'MAY-' + endYear];
        break;
      case 6:
        MonthArray = ['JUL-' + beginYear, 'AUG-' + beginYear, 'SEP-' + beginYear, 'OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear, 'MAR-' + endYear, 'APR-' + endYear, 'MAY-' + endYear, 'JUN-' + endYear,];
        break;
      case 7:
        MonthArray = ['AUG-' + beginYear, 'SEP-' + beginYear, 'OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear, 'MAR-' + endYear, 'APR-' + endYear, 'MAY-' + endYear, 'JUN-' + endYear, 'JUL-' + endYear];
        break;
      case 8:
        MonthArray = ['SEP-' + beginYear, 'OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear, 'MAR-' + endYear, 'APR-' + endYear, 'MAY-' + endYear, 'JUN-' + endYear, 'JUL-' + endYear, 'AUG-' + endYear];
        break;
      case 9:
        MonthArray = ['OCT-' + beginYear, 'NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear, 'MAR-' + endYear, 'APR-' + endYear, 'MAY-' + endYear, 'JUN-' + endYear, 'JUL-' + endYear, 'AUG-' + endYear, 'SEP-' + endYear];
        break;
      case 10:
        MonthArray = ['NOV-' + beginYear, 'DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear, 'MAR-' + endYear, 'APR-' + endYear, 'MAY-' + endYear, 'JUN-' + endYear, 'JUL-' + endYear, 'AUG-' + endYear, 'SEP-' + endYear, 'OCT-' + endYear];
        break;
      case 11:
        MonthArray = ['DEC-' + beginYear, 'JAN-' + endYear, 'FEB-' + endYear, 'MAR-' + endYear, 'APR-' + endYear, 'MAY-' + endYear, 'JUN-' + endYear, 'JUL-' + endYear, 'AUG-' + endYear, 'SEP-' + endYear, 'OCT-' + endYear, 'NOV-' + endYear];
        break;

    }

    return MonthArray;
  }
}