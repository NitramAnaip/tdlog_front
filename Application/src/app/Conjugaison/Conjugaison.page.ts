import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor (private router: Router) {
  }
  recherche () {
    this.listeVerbe.push({
      verbe: this.verbe,
    });
  }
  goVerbe () {
    this.router.navigate(['/DetailMot', {verbe: this.verbe}]);
  }
  ngOnInit(): void {
    this.listeVerbe = [];
  }
}
