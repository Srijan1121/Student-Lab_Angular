import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { student } from 'Student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http:HttpClient) { }

  private url='http://localhost:8084/combined/students';//postman url


  getPosts(){
  return this.http.get(this.url);
  }
  
  //Post
  private confgUrl= 'http://localhost:8084/combined/create';
  post1(obj:student)
{
  //const configUrl= 'http://localhost:8084/combined/create' ;
var headers = new HttpHeaders({'Content-Type': 'application/json'});
return this.http.post(this.confgUrl,obj,{headers});
}

// postStudentWithLabs(student: Studentadd): Observable<any> {
//   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//   return this.http.post(this.confgUrl, student, { headers });
// }


//Delete Record
private configUrl='http://localhost:8084/combined/students/';
delete(id:any){
  return this.http.delete(this.configUrl + id);
}


// Update details
private baseUrl = 'http://localhost:8084/combined/students/'; 
modify(student: any): Observable<any> {
  const url = this.baseUrl + student.id; // Append the ID to the URL
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.put(url, student, { headers });
}
}


// modify(obj:student){
//   const configUrl= 'http://localhost:8084/combined/students/';
//   var headers = new HttpHeaders({'Content-Type':'application/json'});
//   return this.http.put(configUrl ,obj,{headers});
// }

// Update details

// getStudentDetails(studentId: number) {
//   const configUrl = `http://localhost:8084/combined/students/${id}`;
//   return this.http.get(configUrl);
// }

// modify(studentId: number, obj: any) {
//   const configUrl = `http://localhost:8084/combined/students/${studentId}`;
//   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

//   return this.http.put(configUrl, obj, { headers });
// }



