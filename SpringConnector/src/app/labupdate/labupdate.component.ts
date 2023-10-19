import { Component } from '@angular/core';
import { HttpservicelabService } from '../httpservicelab.service';
import { Router } from '@angular/router';
import { lab } from '../lab';

@Component({
  selector: 'app-labupdate',
  templateUrl: './labupdate.component.html',
  styleUrls: ['./labupdate.component.css']
})
export class LabupdateComponent {
constructor(private httpService:HttpservicelabService,private router:Router){}
 model=new lab('PC-001','Room 101','Database-project','2023-09-30T10:00:00');

 modify() {
  this.httpService.modify(this.model).subscribe((response) => {
    console.log(response);
  });
  this.router.navigate(['/updatemsg']);
}

welcomehome(){
  this.router.navigate(['/home'])
}

}
