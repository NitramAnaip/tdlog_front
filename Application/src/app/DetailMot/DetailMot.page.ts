import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-DetailMot',
  templateUrl: 'DetailMot.page.html',
  styleUrls: ['../style.scss'],
})


export class DetailMotPage implements OnInit {
  item: any;
  public message: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe(data => {
     this.message = data;
  });
 }
}
