import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faGooglePlus = faGooglePlusG;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhoneAlt = faPhoneAlt
}
