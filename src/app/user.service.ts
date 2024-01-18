import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // domain:any = 'http://localhost:3000/'
  domain:any = 'https://github.com/sheetalmore7111/IVTASK-RraectForm/'
  
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
