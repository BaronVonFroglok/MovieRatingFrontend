import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RegisterUserService } from '../reg-user-service.service';
import {User} from '../user.models';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
//  registerList: User[];

constructor(private regService:RegisterUserService) { }

private User: User;
regForm = new FormGroup({
  username: new FormControl('', [Validators.required, Validators.pattern(/"[a-zA-Z0-9]"*/)]),
  password: new FormControl('', [Validators.required,  Validators.pattern(/"[a-zA-Z0-9]"*/)]),
});

usernameError:String='';
passwordError:String='';



model: User[]; 
packageAndShip(){

 console.log (this.regForm.controls['username'].value)
 console.log (this.regForm.controls['password'].value)
 console.log('shipping?');

let validSubmission=true;
if(this.regForm.controls['username'].value=='') {
validSubmission=false;
this.usernameError='That username is invalid, must be an valid username';
} else {this.usernameError='';}

if(this.regForm.controls['password'].value==''){
validSubmission=false;
this.passwordError='That password is invalid, please use a password with letters and numbers only, no spaces or special characters.';
} else {this.passwordError='';}

for (let i: number = 0; i < this.model.length; i++) {
  if (this.regForm.controls['username'].value == this.model[i]["username"]){
    validSubmission=false;
    this.usernameError='That username is already in use, please choose another.';    
    break;    
  }
}



if(validSubmission)
{
  console.log(this.User);
  this.User["userId"]=0;
  this.User["username"]=this.regForm.controls['username'].value;
  this.User["password"]=this.regForm.controls['password'].value;
 
  
  


  this.regService.sendRegUser(this.User).subscribe(
  data=>{
   console.log(data);
  }

 );
} else{
   console.log("not poggers");
}
}
 

  ngOnInit(): void {

    this.regService.getUsers().subscribe(
      data=>{
        this.model=data;
      });
    console.log(localStorage.getItem('token'));
   this.User={
      userId:0,
      username:'',
      password:'',
   
    }
    //this.regService.getListOfUsers().subscribe(data=>{
     //this.userList=data;
    }
   // );
  }