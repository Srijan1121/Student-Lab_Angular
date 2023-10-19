import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatemsg',
  templateUrl: './updatemsg.component.html',
  styleUrls: ['./updatemsg.component.css']
})
export class UpdatemsgComponent {

  constructor(private router:Router){}

welcomehome(){
  this.router.navigate(['/home']);
}
}
