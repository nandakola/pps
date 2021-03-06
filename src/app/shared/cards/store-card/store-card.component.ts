import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {

  @Input() title: string;
  @Input() id: number;
  constructor() { }

  ngOnInit(): void {
  }

}
