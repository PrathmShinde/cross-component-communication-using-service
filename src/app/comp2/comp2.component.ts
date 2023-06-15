import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  inputText : string | undefined;

  constructor(public dataService : DataService) {
  }

  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe(res =>{
      this.inputText = res;
    })
  }

}
