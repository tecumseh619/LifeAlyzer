import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MtgInfoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MtgInfoProvider {

  constructor(public http: Http) {
    console.log('Hello MtgInfoProvider Provider');
  }
  
  baseUrl: string = "https://dillionssf-phortonssf.c9users.io:8080/api"
  path: string = "/MTGInfos"
  
  saveInfo(token, info) {
    console.log(info)
    return this.http.post(
      this.baseUrl + this.path + '?access_token=' + token,
      info
    );
  }
  
  getInfo(token){
    console.log(token)
    return this.http.get(
      this.baseUrl + this.path + '?access_token=' + token + '&filter[where][userId]=' + window.localStorage.getItem('userId')
    );
  }

}
