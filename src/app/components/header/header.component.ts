import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { rippleAnimation } from '../../animations/animations';
import { useAnimation, trigger, transition } from '@angular/animations';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    rippleAnimation({
      hoverColor: '#9a67ea'
    })
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() isSWOpen: Boolean = false;
  @Output() sidebar:EventEmitter<Boolean>  =  new EventEmitter();

  faBars = faBars;
  _toggle = true;
  animationState :boolean = false;

  ngOnInit(): void {
  }

  emitEvent(event){
    this.animationState  = !this.animationState;
    this._toggle = !this._toggle;
    this.sidebar.emit(this._toggle);
    event.preventDefault();
  }
}
