import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewSerService {

  constructor(private http:HttpClient) { }

  obtenerNum(){
    return this.http.get("https://api.generadordni.es/v2/misc/phonenumber")
  }
}
