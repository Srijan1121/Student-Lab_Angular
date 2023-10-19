import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServicesService } from '../http-services.service';
import { student } from 'Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  constructor(private httpService:HttpServicesService, private router:Router){}

  
  welcomelab(){
    this.router.navigate(['/lab'])
  }
  welcomehome(){
    this.router.navigate(['/home'])
  }
courses=['a','b','c','d']



}
