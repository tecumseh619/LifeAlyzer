import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
  lifes=[{
    "points": 20
    // "name": PULL CURRENT USER FROM BACKEND -> LOGIN PAGE
  },
  
  {
    "points": 20
    // "name": PULL CHALLENGER FROM BACKEND -> LOGIN PAGE
  }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  addPoints(lifes){
    lifes.points++;
  }
  
  subtractPoints(lifes){
    if (lifes != 0) lifes--;
  }
  
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

  youLost(){
    return alert ("Do you shamefully admit defeat challenger?");
  }
}
