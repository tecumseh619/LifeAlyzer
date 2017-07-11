import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GameResultsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GameResultsProvider {

  constructor(public http: Http) {
    console.log('Hello GameResultsProvider Provider');
  }
  
  baseUrl: string = "https://dillionssf-phortonssf.c9users.io:8080/api"
  path: string = "/GameResults"
    
  saveGame(token, info) {
    console.log(info)
    return this.http.patch(
      this.baseUrl + this.path + '?access_token=' + token,
      info
    );
  }
  
  getGame(token){
    console.log(token)
    return this.http.get(
      this.baseUrl + this.path + '?access_token=' + token + '&filter[where][userId]=' + window.localStorage.getItem('userId')
    );
  }
}
