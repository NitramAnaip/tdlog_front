import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Exercice',
  templateUrl: 'Exercice.page.html',
  styleUrls: ['../style.scss'],
})


export class ExercicePage implements OnInit {
  public message: string;
  constructor() {
    this.message = 'hello world';
  }
  ngOnInit() {
  }
  logEvent() {
    this.message = 'yes';
  }
}
