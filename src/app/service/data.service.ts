import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { }

  getData(){
    return this.httpclient.get('http://127.0.0.1:8000/index');
  }

  // yaha per data jo ha ye .this.employe ki jaga per ha 
  insertdata(data:any){
    return this.httpclient.post('http://127.0.0.1:8000/api/insert',data);
  }

  deleterecord(id:any){
    return this.httpclient.delete('http://127.0.0.1:8000/api/deletedata/'+id);
  }
}
