import { Component, OnInit } from '@angular/core';
import { faCoffee, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //ICONOS
  faCoffee=faCoffee;
  faArrowsRotate=faArrowsRotate;

}
