import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { User } from "./user";
import { Observable } from 'rxjs';

const localUrl = 'http://localhost:8000';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public editId: string;

  constructor(private _http: HttpClient) { }

  addUsers(user): Observable<User> {
    
    return  this._http.post<User>(`${localUrl}/api/user/`, user, httpOptions);
  }

  getUserData(id): Observable<User> {
    console.log(`${localUrl}/api/user?id=`+ id);
    
    return  this._http.get<User>(`${localUrl}/api/user?id=`+ id, httpOptions);
  }

  updateUser(user,id): Observable<User> {
    console.log(`${localUrl}/api/user?id=`+ id);
    
    return  this._http.put<User>(`${localUrl}/api/user?id=`+ id,user, httpOptions);
  }
}