import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LobbyPage } from '../pages/lobby/lobby';
import { HistoryPage } from '../pages/history/history';
import { CalculatorPage } from '../pages/calculator/calculator';
import { RegisterPage } from '../pages/register/register';
import { LandingPage } from '../pages/landing/landing';
import { InfoPage } from '../pages/info/info';

let injections: any[]=[
  MyApp,
  LobbyPage,
  CalculatorPage,
  HistoryPage,
  LandingPage,
  LoginPage,
  RegisterPage,
  InfoPage
  ]

@NgModule({
  declarations: injections,
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  
  bootstrap: [IonicApp],
  
  entryComponents: injections,
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
