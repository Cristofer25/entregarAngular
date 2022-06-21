import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewServicioService {

  constructor(private variable:HttpClient) {}

  obtenerChiste(){
return this.variable.get("https://api.chucknorris.io/jokes/random")
  }
}
