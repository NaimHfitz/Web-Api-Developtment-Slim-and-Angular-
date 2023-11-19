import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const basedriverUrl = 'http://localhost:8080/driver';
const createdriverUrl = 'http://localhost:8080/driver/add';
const deldriverUrl = 'http://localhost:8080/driver/del';
const putdriverUrl = 'http://localhost:8080/driver/put';
const basevehicleUrl = 'http://localhost:8080/vehicle';
const createvehicleUrl = 'http://localhost:8080/vehicle/add';
const delvehicleUrl = 'http://localhost:8080/vehicle/del';
const putvehicleUrl = 'http://localhost:8080/vehicle/put';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private _http: HttpClient) {}
  //get all
  getAlldriver(): Observable<any> {
    const url = 'http://localhost:8080/alldriver';
    return this._http.get<any>(url);
  }
  getAllvehicle(): Observable<any> {
    const url = 'http://localhost:8080/allvehicle';
    return this._http.get<any>(url);
  }

  // create
  createdriver(driver: any): Observable<any> {
    console.log(driver, 'createapi=>');
    return this._http.post(createdriverUrl, driver);
  }

  createvehicle(vehicle: any): Observable<any> {
    console.log(vehicle, 'createapi=>');
    return this._http.post(createvehicleUrl, vehicle);
  }

  //deleting

  deletedriver(id: any): Observable<any> {
    return this._http.delete(`${deldriverUrl}/${id}`);
  }

  deletevehicle(id: any): Observable<any> {
    return this._http.delete(`${delvehicleUrl}/${id}`);
  }

  //update
  updatedriver(id: any, driver: any): Observable<any> {
    return this._http.put(`${putdriverUrl}/${id}`, driver);
  }
  updatevehicle(id: any, vehicle: any): Observable<any> {
    return this._http.put(`${putvehicleUrl}/${id}`, vehicle);
  }

  //get one
  getOnedriver(id: any): Observable<any> {
    return this._http.get(`${basedriverUrl}/${id}`);
  }
  getOnevehicle(id: any): Observable<any> {
    return this._http.get(`${basevehicleUrl}/${id}`);
  }
}
