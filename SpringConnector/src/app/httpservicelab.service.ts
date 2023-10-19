import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LabComponent } from './lab/lab.component';
import { lab } from './lab';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpservicelabService {

  constructor(private http:HttpClient) {}
  
    private url='http://localhost:8084/combined/labs';//postman url
  
  //Get Detail
    getPosts(){
    return this.http.get(this.url);
    }
  
   //Post Detail
    postlab(obj:lab)
  {
    const configUrl= 'http://localhost:3000/users';
  
  
  var headers = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.post(configUrl,obj,{headers});
  }
  
  //Delete Record
private configUrl='http://localhost:8084/combined/labs/';
delete(id:any){
  return this.http.delete(this.configUrl + id);
}


//Update Record
private baseUrl = 'http://localhost:8084/combined/labs/'; 
modify(lab: any): Observable<any> {
  const url = this.baseUrl + lab.id; // Append the ID to the URL
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.put(url, lab, { headers });
}
  
  // modify(obj:lab){
  //   const configUrl= 'http://localhost:3000/users';
  //   var headers = new HttpHeaders({'Content-Type':'application/json'});
  //   return this.http.put(configUrl,obj,{headers});
  // }


  }
  