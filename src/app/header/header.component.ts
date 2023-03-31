import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../shared/register-modal/register-modal.component';


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

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, {class: 'modal-xl modal-dialog-centered'});
  }
}
