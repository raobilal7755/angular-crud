import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  mydata:any;
  constructor(private employeservice:DataService) { }

  ngOnInit() {
    this.getDatalaravel();
  }

    getDatalaravel(){
     this.employeservice.getData().subscribe(res=>{
       this.mydata=res;
     })
    }

    deleterecord(id:any){
      this.employeservice.deleterecord(id).subscribe(res=>{
        this.getDatalaravel();
      })
    }
}
