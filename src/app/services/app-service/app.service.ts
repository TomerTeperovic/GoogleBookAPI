import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private userName = ''
  setUserName = (username:string)=>{
    this.userName = username 
  }
  getUserName = () => {
    return of(this.userName)
  }
}
