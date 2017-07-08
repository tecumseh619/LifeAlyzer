import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResultsPage } from '../results/results';

import { MtgInfoProvider } from '../../providers/mtg-info/mtg-info';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
infos: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mtgInfos: MtgInfoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.mtgInfos.getInfo(window.localStorage.getItem("token"))
    .map(res=> res.json())
    .subscribe(res => {
      this.infos = res;
    }, error => {
      alert("Uh oh, looks like something went wrong " + error + ".")
    });
  }

  goToResults(info) {
    this.navCtrl.push(ResultsPage, {
      info: info
    });
  }
  
}
