import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  filterUniversity(university: string, event: any) {
    let universities = document.getElementsByClassName('filterCard')
    let buttons = document.getElementsByClassName('filterBtn')
    if (university == "all") university = ""
    for (let i = 0; i < universities.length; i++) {
      universities[i].classList.remove('show')
      if(universities[i].className.indexOf(university) != -1) {
        universities[i].classList.add('show')
      }
    }
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active')
      event.target.classList.add('active')
    }
  }

}
