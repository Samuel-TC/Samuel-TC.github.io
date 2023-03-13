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
    const navbarLink = document.getElementsByClassName('nav-link')[0]
    const navbarLink2 = document.getElementsByClassName('nav-link')[1]
    const navbarLink3 = document.getElementsByClassName('nav-link')[2]
    const navbarLink4 = document.getElementsByClassName('nav-link')[3]
    const navbarLink5 = document.getElementsByClassName('nav-link')[4]

    navbarLink2.classList.remove('active')
    navbarLink3.classList.remove('active')
    navbarLink4.classList.remove('active')
    navbarLink5.classList.remove('active')
    if(!navbarLink.classList.toggle('active')){
      navbarLink.classList.toggle('active')
    }
  }

  ngOnInit(): void {}

  dowland(){
    alert('Hola')
  }

    
}

