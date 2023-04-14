import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../shared/register-modal/register-modal.component';

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

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, {class: 'modal-xl modal-dialog-centered'});
  }
}
