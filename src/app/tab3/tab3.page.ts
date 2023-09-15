import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  altura: number=0;
  peso: number=0;
  
    constructor() { }
  
    ngOnInit() {
    }
  
    calcular(){
      alert(this.peso/(this.altura*this.altura))
    }

}
