import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-Conjugaison',
  templateUrl: 'Conjugaison.page.html',
  styleUrls: ['../style.scss'],
})


export class ConjugaisonPage implements OnInit {
  public verbe: string;
  public temps: string;
  public personne: string;
  public listeVerbe: Array<{ verbe: string}> = [];
  public json = $.getJSON('./Verbes.json');
  public data = eval(this.json.responseText);
  public i = 0;
  constructor (private router: Router) {
    for ( let key in this.data) {
      if ( this.i = 1 ) {
        console.log(this.data);
      }
      this.i = this.i+1;
    }
  }
  ngOnInit(): void {
    this.listeVerbe = [];
  }
  recherche () {
    this.listeVerbe.push({
      verbe: this.verbe,
    });
  }
  goVerbe () {
    this.router.navigate(['/DetailMot', {verbe: this.verbe}]);
  }
}
