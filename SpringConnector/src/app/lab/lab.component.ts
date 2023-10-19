import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
constructor(private router:Router){}
welcomestudent(){
  this.router.navigate(['/student']);
}
welcomehome(){
  this.router.navigate(['/student']);
}
}
