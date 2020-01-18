import { Component, OnInit } from '@angular/core';
import { Senddata } from './senddata';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private employeservice:DataService) { }

  ngOnInit() {
  }
// yaha per sab sy phely ham ny ek class create ki 
// pher us ka  [senddata ] class ka obj create kiya .
// or pher [(ngModel)]='employe.name' sy sab ki value get ki. 
// phr console.log(this.employe) ker ky ham ny conloe json value check ki.
// phr form module or service ko ham ny app.module.ts ma import karwaya.
// phr component ma service ko import kiya .
// phr [this.employeservice.inserdata servive sy call kiys or us ma emplye object ko paste ker diya . or subscribe kiya ok tc]

  employe=new Senddata;
  myfun(){
   this.employeservice.insertdata(this.employe).subscribe(res=>{
     this.employeservice.getData;
   })
  }

}
