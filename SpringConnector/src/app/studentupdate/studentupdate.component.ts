import { Component } from '@angular/core';
import { HttpServicesService } from '../http-services.service';
import { student } from 'Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent {

  constructor(private httpService:HttpServicesService,private router:Router){}
  model = new student('John','john23@example.com','9934678890','btech');
  modify() {
    this.httpService.modify(this.model).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(['/updatemsg']);
  }

welcomelab(){
  this.router.navigate(['/lab'])
}
welcomehome(){
  this.router.navigate(['/home'])
}
//courses=['a','b','c','d']
}
