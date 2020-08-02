import { Component, OnInit, Input } from '@angular/core';
import { trigger,state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'ui-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations:[
    trigger('openLeftCloseLeft',[
      state('openLeft', style({
        opacity:1
      })),
      state('closeLeft', style({
        opacity:0
      })),
      transition('openLeft=>closeLeft',[
        animate('200ms ease-in')
      ]),
      transition('closeLeft=>openLeft',[
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input() position :string ="left";
  @Input() isActive:boolean = false;
  
  ngOnInit(): void {
  }

}
