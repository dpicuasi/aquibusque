import { Injectable, OnInit } from '@angular/core';
import { IAnuncio } from '../interfaces/IAnuncio';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService  {

  info:IAnuncio[] = [];

  cargado:boolean=false;
  constructor(private http:HttpClient) {
    const url: string = '/assets/data/data.json';
    this.http.get(url).subscribe((data: any) => {
      this.info = data;
      this.cargado = true;
    });
  }
}
