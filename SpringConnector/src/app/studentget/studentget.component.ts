import { Component } from '@angular/core';

import { HttpServicesService } from '../http-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studentget',
  templateUrl: './studentget.component.html',
  styleUrls: ['./studentget.component.css']
})
export class StudentGetComponent {
  constructor(private httpService:HttpServicesService,private router:Router){}

  posts:any;
  ngOnInit(){
    this.httpService.getPosts().subscribe(
      (response)=>{this.posts=response;}
    );

  }

  
  welcomelab(){
    this.router.navigate(['/lab'])
  }
  welcomehome(){
    this.router.navigate(['/home'])
  }
//courses=['a','b','c','d']

  
}

