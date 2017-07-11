import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { InfoPage } from '../info/info';
import { HistoryPage } from '../history/history';
import { LandingPage } from '../landing/landing';

import { AppUsersProvider } from '../../providers/app-users/app-users';
/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers: AppUsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

  startGame(){
      this.navCtrl.push(InfoPage);
  }
  
  lookHistory(){
    this.navCtrl.push(HistoryPage);
    }

  logout(){
      this.appUsers.logout(window.localStorage.getItem("token"))
      .map(res => res.json())
      .subscribe(res => {
        window.localStorage.clear();
        this.navCtrl.setRoot(LandingPage);
      }, error => {
        alert("Uh oh " + error + ". :(")
      }); 
  }

}
