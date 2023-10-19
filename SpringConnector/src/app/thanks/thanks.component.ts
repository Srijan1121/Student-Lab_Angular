import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent {
constructor(private router:Router){}

welcomehome(){
  this.router.navigate(['/home']);
}
}
