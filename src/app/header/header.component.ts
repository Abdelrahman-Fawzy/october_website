import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faGooglePlus = faGooglePlusG;
}
