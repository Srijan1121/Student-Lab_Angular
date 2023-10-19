import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletemsg',
  templateUrl: './deletemsg.component.html',
  styleUrls: ['./deletemsg.component.css']
})
export class DeletemsgComponent {

  constructor(private router:Router){}

welcomehome(){
  this.router.navigate(['/home']);
}

}
