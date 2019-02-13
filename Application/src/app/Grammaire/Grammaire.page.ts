import { Component } from '@angular/core';

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
}
