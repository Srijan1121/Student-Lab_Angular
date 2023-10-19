import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { LabComponent } from './lab/lab.component';
import { FormsModule } from '@angular/forms';
import { StudentGetComponent } from './studentget/studentget.component';
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { StudentdeleteComponent } from './studentdelete/studentdelete.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { LabcreateComponent } from './labcreate/labcreate.component';
import { LabdeleteComponent } from './labdelete/labdelete.component';
import { LabgetComponent } from './labget/labget.component';
import { LabupdateComponent } from './labupdate/labupdate.component';
import { UpdatemsgComponent } from './updatemsg/updatemsg.component';
import { DeletemsgComponent } from './deletemsg/deletemsg.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LabComponent,
    StudentGetComponent,
    HomeComponent,
    ThanksComponent,
    ErrorComponent,
    StudentcreateComponent,
    StudentdeleteComponent,
    StudentupdateComponent,
    LabcreateComponent,
    LabdeleteComponent,
    LabgetComponent,
    LabupdateComponent,
    UpdatemsgComponent,
    DeletemsgComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      // {path:'student',component:StudentComponent},
      {path:'lab',component:LabComponent},
      {path:'thanks',component:ThanksComponent},
      {path:'updatemsg',component:UpdatemsgComponent},
      {path:'deletemsg',component:DeletemsgComponent},
      {path:'studentget',component:StudentGetComponent},
      {path:'studentcreate',component:StudentcreateComponent },
      {path:'studentdelete',component:StudentdeleteComponent},
      {path:'studentupdate',component:StudentupdateComponent},

      {path:'labcreate',component:LabcreateComponent},
      {path:'labdelete',component:LabdeleteComponent},
      {path:'labget',component:LabgetComponent},
      {path:'labupdate',component:LabupdateComponent},

      {path:'home',component:HomeComponent},
      {path:'', redirectTo:'/home',pathMatch:'full'},
      {path:'**',component:ErrorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
