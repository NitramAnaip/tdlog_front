import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Liste des cours',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Cours',
      url: '/Cours',
      icon: 'book'
    },
    {
      title: 'Exercice',
      url: '/Exercice',
      icon: 'checkbox-outline'
    },
    {
      title: 'Grammaire',
      url: '/Grammaire',
      icon: 'information'
    },
    {
      title: 'Conjugaison',
      url: '/Conjugaison',
      icon: 'information'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
