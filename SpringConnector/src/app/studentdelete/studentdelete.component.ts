import { Component } from '@angular/core';
import { HttpServicesService } from '../http-services.service';
import { student } from 'Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdelete',
  templateUrl: './studentdelete.component.html',
  styleUrls: ['./studentdelete.component.css']
})
export class StudentdeleteComponent {
constructor(private httpService:HttpServicesService,private router:Router){}
model=new student('john','john@gmail.com','1236894588','Computer- Science');
  id:any;
  delete()
  {
    this.httpService.delete(this.id).subscribe(
      (response)=>{console.log(response)}
    );
    this.router.navigate(['/deletemsg']);
  }


welcomelab(){
  this.router.navigate(['/lab'])
}
welcomehome(){
  this.router.navigate(['/home'])
}
courses=['a','b','c','d']

}
