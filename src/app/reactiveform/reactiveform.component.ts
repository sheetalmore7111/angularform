import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  userForm: FormGroup | any;
  constructor(private userService: UserService, private fb: FormBuilder){}
 
  changeButton = true;
  userData:any;
  toggleButton(){
    this.changeButton =! this.changeButton;
  }

  

  user:any;

  ngOnInit(): void {

    this.userForm = this.fb.group({
      firstName :['', [Validators.required]],
      lastName :['', [Validators.required]],
      email :['', [Validators.required, Validators.email]],
      phone :['', [Validators.required]],
      company :['', [Validators.required]],
      dob:['', [Validators.required]],
      gender:['', []],
      password :['', [Validators.required]],
      confirmPassword :['', [Validators.required]]
      
    })

    this.userService.getAllUsers().subscribe((res)=>{
      console.log(res);
      this.user = res;
    })
  }

  getAlluserData() {
    this.userService.getAllUsers().subscribe((res)=>{
      console.log(res);
      this.user = res;
    })
  }
  onSubmit(){
    if (this.userForm.valid) {
      // Process the form data
      console.log("Process the form data",this.userForm.value);
      console.log(this.userForm.value);
      this.userService.addUsers(this.userForm.value).subscribe((res)=>{
        console.log(res);
        this.getAlluserData()
      })
      this.userForm.reset()
     
    } else {
      // Mark all form controls as touched to display validation errors
      this.userForm.markAllAsTouched();
      
    }
  }

  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((data)=>{
      console.log(data)
      this.getAlluserData()
    })
  }

  getUserById(id:any){
    this.userService.getUserById(id).subscribe((data:any)=>{
      console.log(data)
      this.userForm.patchValue(data);
      this.userData = data;
      // this.getAlluserData()
      this.changeButton = false;
    })
  }

  updateUser(){
    console.log(this.userForm.value);
    
    this.userService.updateUser(this.userData.id, this.userForm.value).subscribe((res)=>{
      console.log(res);
      this.getAlluserData()
      
      this.changeButton = true;
      this.userForm.reset()
    })
  }


}
