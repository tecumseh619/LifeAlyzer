import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MtgInfoProvider } from '../../providers/mtg-info/mtg-info';
import { CalculatorPage } from '../calculator/calculator';
/**
 * Generated class for the InfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  form: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mtgInfo: MtgInfoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
    this.form = {}
  }
  
  infoForm(form) {
    console.log(form);
    if(form.invalid) {
      return alert("Please fill out all of the required fields.");
    }

  this.form.createDate = new Date().toISOString();
  this.form.userId = window.localStorage.getItem("userId");
  this.mtgInfo.saveInfo(window.localStorage.getItem("token"), this.form)
    .map(res=>res.json())
    .subscribe(res=>{
      this.navCtrl.setRoot(CalculatorPage, {
        info: this.form,
        showHome: true
      });
      //window.localStorage.setItem('token', res.token);
      //window.localStorage.setItem('userId', res.id);
    }, error=>{
      return alert ("Uh oh looks like " + error + " just happened.")
    });
  }
 
   //   this.mtgInfo.saveInfo(window.localStorage.getItem("token"), this.form)
  //     .map(res => res.json())
  //     .subscribe(res => {
  //       window.localStorage.setItem('token', res.token);
  //       window.localStorage.setItem('userId', res.id);
  //       this.navCtrl.push(CalculatorPage);
  //     }, error => {
  //       alert("Uh oh " + error + ". :(")
  //     }); 
  // }   
}
