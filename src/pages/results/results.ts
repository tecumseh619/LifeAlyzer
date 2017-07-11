import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby'

import { GameResultsProvider } from '../../providers/game-results/game-results';
import { MtgInfoProvider } from '../../providers/mtg-info/mtg-info';

/**
 * Generated class for the ResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  games: any;
  showHome: boolean = true;
  
  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public gameResults: GameResultsProvider,
  public mtgInfo: MtgInfoProvider
  ) {
  }
    
  toLobby(){
    this.navCtrl.setRoot(LobbyPage);
  };
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    this.gameResults.getGame(window.localStorage.getItem("token"))
    .map(res=> res.json())
    .subscribe(res => {
      this.games = res;
    }, error => {
      alert("Uh oh, looks like something messed up " + error + ".")
    });
  }

}
