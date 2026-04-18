import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger,style,transition,animate, state } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations:[
    trigger('enterState',[
      state('void',style({
        transform: 'translateX(-100%)',
        opacity: 0 
      })),
      transition(':enter',[
        animate('1s cubic-bezier(0.4, 0, 0.2, 1)',style({
          transform: 'translateX(0)',
          opacity: 1 
        }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  state = 'normal';
  title = 'Portafolio';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
      console.log(scrollPosition)
      if (scrollPosition <= componentPosition-600) {
       
        this.state = 'scrolled'
      } else {
        
        this.state = 'normal'
        this.inHome()
      }
  }

  inHome(){
    const navbarLinks = Array.from(document.getElementsByClassName('nav-link'));
  
    navbarLinks.forEach(link => link.classList.remove('active'));
    navbarLinks[0].classList.add('active');
  }

  ngOnInit(): void {}

  dowland(){
    window.open('assets/docs/Samuel Tinoco Calderón EN.pdf', '_blank');
  }

    
}

