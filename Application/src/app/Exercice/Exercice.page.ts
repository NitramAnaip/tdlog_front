import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Exercice',
  templateUrl: 'Exercice.page.html',
  styleUrls: ['../style.scss'],
})


export class ExercicePage implements OnInit {
  item: any;
  public message: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe(data => {
     this.message = data;
  });
 }
}
