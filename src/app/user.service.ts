import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  domain:any = 'http://localhost:3000/'
  // domain:any = 'https://github.com/sheetalmore7111/IVTASK-RraectForm/'
=======
  // domain:any = 'http://localhost:3000/'
  private domain: string = 'https://angularform-git-main-sheetals-projects-ab055629.vercel.app//assets/userData.json/';
>>>>>>> bf2babb82256dc82c9dc2fcf70ebbd0945651016
  
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.domain}user`)
  }

  addUsers(body:any){
    return this.http.post(`${this.domain}user/`, body)
  }

  deleteUser(id:number){
    return this.http.delete(`${this.domain}user/`+id )
  }

  getUserById(id:any){
    return this.http.get(`${this.domain}user/`+id);
  }

  updateUser(id:any,body:any){
    return this.http.put(`${this.domain}user/`+id ,body);
  }

}
