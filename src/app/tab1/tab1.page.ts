import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  idadedog: number=0;

  constructor() {}

  calcular(){
    alert(this.idadedog*7)
  }


}
