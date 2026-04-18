import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
  animations: [
    trigger('scrollAnimationExperience', [
      state('scrolled', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('normal', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('scrolled => normal', animate('1000ms ease-out')),
      transition('normal => scrolled', animate('1000ms ease-in')),
      transition('void => scrolled', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('1000ms ease-out')
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {

  state = 'normal'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition <= componentPosition - 600) {
      this.state = 'scrolled'
    } else {
      this.state = 'normal'
    }
  }

  ngOnInit(): void {
  }

}
