import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  paises: any;
  cboPaises: any;
  cboPaisesAll: any;
  ngModule : string = "import {NgSelectModule} from 'ng-multiple-selection'"
  
  ngOnInit() {
    this.paises = [
      {
        group: "Select All",
        value: "01",
        name: "Perú",
      },
      {
        group: "Select All",
        value: "02",
        name: "Bolivia",
      },
      {
        group: "Select All",
        value: "03",
        name: "Chile",
      },
      {
        group: "Select All",
        value: "04",
        name: "Paraguay",
      },
      {
        group: "Select All",
        value: "'05'",
        name: "Uruguay",
      },
      {
        group: "Select All",
        value: "06",
        name: "Argentina",
      }
    ]
    this.cboPaises = '01';
    this.cboPaisesAll = []
    this.paises.forEach(element => {
      this.cboPaisesAll.push(element.value)
    });
  }

   copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    document.getElementById("visible").style.display="block"
    setTimeout(function(){ 
      document.getElementById("visible").style.display="none"
     }, 2000);
     
  }
  codeHTML:string = `
  <ng-select [items]="paises" [multiple]="false" bindLabel="name" groupBy="" [selectableGroup]="false"
    [selectableGroupAsModel]="false" [closeOnSelect]="false" bindValue="value" [(ngModel)]="cboPaises">
    <ng-template ng-option-tmp let-item="item" let-item$="item$" let-index="index">
      <input id="item-{{index}}" type="checkbox" [ngModel]="item$.selected" />&nbsp;
      {{item.name }}
    </ng-template>
  </ng-select>
`
}
