import { Component } from '@angular/core';
import { HttpservicelabService } from '../httpservicelab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labget',
  templateUrl: './labget.component.html',
  styleUrls: ['./labget.component.css']
})
export class LabgetComponent {
  constructor(private httpService:HttpservicelabService,private router:Router){}

  posts:any;
  ngOnInit(){
    this.httpService.getPosts().subscribe(
      (response)=>{this.posts=response;}
    );

  }

  welcomehome(){
    this.router.navigate(['/home']);
  }
}
