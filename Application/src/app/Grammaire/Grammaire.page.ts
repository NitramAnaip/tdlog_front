import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Grammaire',
  templateUrl: 'Grammaire.page.html',
  styleUrls: ['../style.scss'],
})


export class GrammairePage {
  public mot: string;
  public type = 'tous';
  recherche() {
    this.mot = this.type;
  }
  constructor (private router: Router) {
  }
  goMot () {
    this.router.navigate(['/DetailMot', {mot: this.mot}]);
  }
}
