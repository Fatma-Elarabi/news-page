import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss']
})
export class InfoAlertComponent implements OnInit {

  @Input() message!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
