import { Component, OnInit, Input } from '@angular/core';
import { trigger,state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'ui-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations:[
    trigger('openClose',[
      state('open', style({
        opacity:1,
        display:'relative'
      })),
      state('close', style({
        opacity:0,
        display:'none'
      })),
      transition('open=>close',[
        animate('200ms ease-in')
      ]),
      transition('close=>open',[
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input() position :string ="left";
  @Input() isActive:boolean = false;
  @Input() panelStyle:string;
  ngOnInit(): void {
      console.log(this.panelStyle)
  }

}
