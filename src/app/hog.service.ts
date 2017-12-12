import { Injectable }               from '@angular/core';
import { Headers, Http, Response, RequestOptions }  from '@angular/http';
import { Status }                   from './status'
import { Observable }               from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HogService {

  private apiUrl = 'http://52.163.59.88/api/laravel/rfid';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  
  constructor
  (
    private http: Http
  ) {}

  gateData() {
    const url = `${this.apiUrl}/accounts`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

// get users from id
  gateUser(data: string) {
    const url = `${this.apiUrl}/users/${data}`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

// get account info
  postInfo(data: any){
    const url = `${this.apiUrl}/accountsinfo`
    var params = JSON.stringify(data);
    console.log('Service log: ' + params);
    return this.http.post(url, params, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

// change gate status
  putGate(data: any) {
    const url = `${this.apiUrl}/accountsgate`
    var params = JSON.stringify(data);
    console.log('Service log: ' + params);
    return this.http.put(url, params, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

// get entry log
  postEntry(data: any) {
    const url = `${this.apiUrl}/accountsentry`
    var params = JSON.stringify(data);
    console.log('Service log: ' + params);
    return this.http.post(url, params, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // get transaction
  postTransaction(data: any) {
    const url = `${this.apiUrl}/accountstransaction`
    var params = JSON.stringify(data);
    return this.http.post(url, params, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

// get stafftopup
  getStaff() {
    const url = `${this.apiUrl}/accountsstafffull`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // post stafftopup
  postStafftopup(data: any) {
    const url = `${this.apiUrl}/users`
    var params = JSON.stringify(data);
    console.log('Service log: ' + params);
    return this.http.post(url, params, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // cashier staff
  postCashier(data: any) {
    const url = `${this.apiUrl}/cashierstaffs`
    var params = JSON.stringify(data);
    console.log('Service log: ' + params);
    return this.http.post(url, params, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // get station
  getStation() {
    const url = `${this.apiUrl}/cashiers`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // get staffpos
  getStaffPos() {
    const url = `${this.apiUrl}/accountsboothfull`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // post Pos
  postPos(data: any) {
    const url = `${this.apiUrl}/boothstaffs`
    var params = JSON.stringify(data);
    console.log('Service log: ' + params);
    return this.http.post(url, params, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // get station pos
  getStationpos() {
    const url = `${this.apiUrl}/booths`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getStations() {
    const url = `${this.apiUrl}/cashierandboothlist`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  postBoothCashier(data: any) {
    const url = `${this.apiUrl}/cashiers`
    var params = JSON.stringify(data);
    console.log('Service log: ' + params);
    return this.http.post(url, params, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  postBoothPos(data: any) {
    const url = `${this.apiUrl}/booths`
    var params = JSON.stringify(data);
    console.log('Service log: ' + params);
    return this.http.post(url, params, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  deleteBoothPos(data: any) {
    var body = JSON.stringify(data);
    const url = `${this.apiUrl}/booths`
    console.log('Service log: ' + body);
    let options = new RequestOptions({
      headers: this.headers,
      body : body
  })
    return this.http.delete(url, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  deleteBoothTopup(data: any) {
    var body = JSON.stringify(data);
    const url = `${this.apiUrl}/cashiers`
    console.log('Service log: ' + body);
    let options = new RequestOptions({
      headers: this.headers,
      body : body
  })
    return this.http.delete(url, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  deleteStaffTopup(data: any) {
    var body = JSON.stringify(data);
    const url = `${this.apiUrl}/cashierstaffs`
    console.log('Service log: ' + body);
    let options = new RequestOptions({
      headers: this.headers,
      body : body
    })
    return this.http.delete(url, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  deleteStaffPos(data: any) {
    var body = JSON.stringify(data);
    const url = `${this.apiUrl}/boothstaffs`
    console.log('Service log: ' + body);
    let options = new RequestOptions({
      headers: this.headers,
      body : body
    })
    return this.http.delete(url, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.log(error)
    return Observable.throw(error);
  }

}
