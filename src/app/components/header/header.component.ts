import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() isSWOpen: Boolean = false;
  @Output() sidebar:EventEmitter<Boolean>  =  new EventEmitter();

  faBars = faBars;
  _toggle = true;

  ngOnInit(): void {
  }

  emitEvent(event){
    this._toggle = !this._toggle;
    console.log('Inside')
    this.sidebar.emit(this._toggle);
    event.preventDefault();
  }

}
