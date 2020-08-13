import { Component, OnInit, Input } from '@angular/core';
import { SearchModel,HeadLineResponse } from '../api/search.model';

@Component({
  selector: 'ui-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tileObject: HeadLineResponse;
  tileResponse:HeadLineResponse;
  randomDelay:Number = Math.floor((Math.random()*8)+2);
  constructor() { }
  ngOnInit() {
    this.tileResponse = this.tileObject;
  }
}
