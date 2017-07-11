import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ResultsPage } from '../results/results';

import { GameResultsProvider } from '../../providers/game-results/game-results';
// import { LobbyPage } from '../lobby/lobby';

/**
 * Generated class for the CalculatorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  gameWins: any = {};
  
  lifes=[{
    "points": 20
    // "name": PULL CURRENT USER FROM BACKEND -> LOGIN PAGE
  },
  
  {
    "points": 20
    // "name": PULL CHALLENGER FROM BACKEND -> LOGIN PAGE
  }
    ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public gameResults: GameResultsProvider
    ) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
    this.gameWins = {
      "winNumber": 0,
      "totalGames": 0
    };
  }

  addPoints(lifes){
    lifes.points++;
  }
  
  subtractPoints(lifes){
    if (lifes.points != 0) {
      lifes.points--
    };
    if (lifes.points === 0) {
      let alert = this.alertCtrl.create({
      title: 'Game over?',
      message: 'Did you  defeat your opponent?',
      buttons: [
        {
          text: 'No, I was defeated.',
          role: 'cancel',
          handler: () => {
            console.log('Defeat click');
            this.gameWins.createDate = new Date().toISOString();
            this.gameWins.userId = window.localStorage.getItem("userId");
            this.gameWins.winNumber += 0;
            this.gameWins.totalGames += 1;
            console.log(this.gameWins);
            this.gameResults.saveGame(window.localStorage.getItem("token"), this.gameWins)
              .map(res => res.json())
              .subscribe(res => {
                this.navCtrl.setRoot(ResultsPage, {
                  game: this.gameWins,
                  showHome: true
                });
              }, error => { 
                // alert("Uh oh, something wrong is going on.");
                });
          }
        },
        {
          text: 'I was victorious on this day.',
          handler: () => {
            console.log('Victory click');
              this.gameWins.createDate = new Date().toISOString();
              this.gameWins.userId = window.localStorage.getItem("userId");
              this.gameWins.totalGames = this.gameWins.totalGames += 1; 
              this.gameWins.winNumber = this.gameWins.winNumber += 1;
              console.log(this.gameWins);
              this.gameResults.saveGame(window.localStorage.getItem("token"), this.gameWins)
                .map(res => res.json())
                .subscribe(res => {
                  this.navCtrl.setRoot(ResultsPage, {
                    game: this.gameWins,
                    showHome: true
                  });
                }, error => { 
                  // alert("Uh oh, something wrong is going on.");
                  });
          }
        }
      ]
    });
    
    alert.present();
    
    } 
  }
}
  
  
  //   toLobby(){
  //   this.navCtrl.push(LobbyPage);
  // }
  
  
  // decrement(){
  //   this.lifes.points--;
  // }

  // increment(){
  //   this.lifes.points++;
  // }
  
  // decrease(){
  //   this.lifes.points--;
  // }
  
  // increase(){
  //   this.lifes.points++;
  // }

//   youLost(){
//     return alert ("Do you shamefully admit defeat challenger?");
//   }
// }
