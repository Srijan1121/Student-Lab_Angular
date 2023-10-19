import { Component } from '@angular/core';
import { HttpServicesService } from '../http-services.service';
import { student } from 'Student';
import { Router } from '@angular/router';



@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent {

constructor(private httpService:HttpServicesService,private router:Router){}
model=new student('john','john@gmail.com','1236894588','Computer- Science');
studentModel = {
  name: 'John',
  email: 'john@gmail.com',
  phoneNumber: '1236894588',
  course: 'Computer-Science',
  labs: [
    {
      pcNumber: 'PC123',
      roomNumber: 'RoomA',
      assignedTask: 'Task1',
      allottedTime: '9:00 AM - 12:00 PM',
    },
    {
      pcNumber: 'PC456',
      roomNumber: 'RoomB',
      assignedTask: 'Task2',
      allottedTime: '1:00 PM - 4:00 PM',
    },
  ],
};

post1(){
  this.httpService.post1(this.model).subscribe(
    (response)=>{console.log(response)}
  );
  this.router.navigate(['/thanks']);
}
welcomelab(){
    this.router.navigate(['/lab'])
  }
  welcomehome(){
    this.router.navigate(['/home'])
  }
}
// student = new Studentadd();


// createStudent(): void {
//   this.httpService.postStudentWithLabs(this.student).subscribe(
//     (response) => {
//       console.log('Student created successfully', response);
//       // You can reset the form or navigate to another page here
//     },
//     (error) => {
//       console.error('Error creating student', error);
//     }
//   );
//   }

// addLab(): void {
//   this.student.labs.push(new Labadd());
// }

// removeLab(index: number): void {
//   this.student.labs.splice(index, 1);
// }


// postStudentWithLabs() {
//   this.httpService.postStudentWithLabs(this.studentModel).subscribe(
//     (response) => {
//       console.log(response);
//     }
//   );
//   this.router.navigate(['/thanks']);
// }


//courses=['a','b','c','d']

