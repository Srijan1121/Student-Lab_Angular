import { Component } from '@angular/core';
import { HttpServicesService } from '../http-services.service';
import { Router } from '@angular/router';
import { lab } from '../lab';
import { HttpservicelabService } from '../httpservicelab.service';

@Component({
  selector: 'app-labcreate',
  templateUrl: './labcreate.component.html',
  styleUrls: ['./labcreate.component.css']
})
export class LabcreateComponent {
  constructor(private httpService:HttpservicelabService,private router:Router){}
  model=new lab('PC-001','Room 101','Database-project','2023-09-30T10:00:00');

  postlab(){
    this.httpService.postlab(this.model).subscribe(
      (response)=>{console.log(response)}
    );
    this.router.navigate(['/thanks']);
  }
  welcomehome(){
    this.router.navigate(['/home'])
  }
}
