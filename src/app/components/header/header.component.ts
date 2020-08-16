import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { rippleAnimation } from '../../animations/animations';
import { useAnimation, trigger, transition } from '@angular/animations';
import { FeatureButton, INameValue } from '../api/search.model';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    rippleAnimation({
      hoverColor: '#9a67ea'
    })
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() sidebar: EventEmitter<INameValue> = new EventEmitter();
  @Input() enableFeatureButton: boolean = false;
  @Input() set featureButtonList(featureButtons: Array<FeatureButton>) {
    this._featureButtons = featureButtons;
  }
  get featureButtonList() {
    return this._featureButtons;
  }
  _featureButtons: Array<FeatureButton>;
  featureButtonToggle: Map<String, Boolean> = new Map();
  faBars = faBars;

  ngOnInit(): void {
    for (let button of this.featureButtonList) {
      this.featureButtonToggle[button.name] = false;
    }
    console.log(this.featureButtonList)
  }

  /*emitEvent(name, event){
      this.featureButtonToggle[name] = !this.featureButtonToggle[name];
      this.sidebar.emit({'name' : name , 'value' : this.featureButtonToggle[name]});
      event.preventDefault();
  }*/

  emitEvent(name, event) {
    // Set the emit status/ button enable of the current button clicked
    this.featureButtonToggle[name] = !this.featureButtonToggle[name];
    this.sidebar.emit({ 'name': name, 'value': this.featureButtonToggle[name] });
    // set everything else false
    for (let key of Object.keys(this.featureButtonToggle)) {
      if (key != name && this.featureButtonToggle[key] !== false) {
        this.sidebar.emit({ 'name': key, 'value': false });
        this.featureButtonToggle[key] = false;
      }
    }
    event.preventDefault();
  }
}
