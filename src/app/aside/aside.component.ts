import { Component, OnInit,NgModule,Input } from '@angular/core';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

@Input() items:any
  
  constructor() { 
  }

    ngOnInit() {     
    }
}
