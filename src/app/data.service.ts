import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  dataEmitter = new EventEmitter<string | undefined>();

  getData(data:string | undefined){
    this.dataEmitter.emit(data);
  }
}
