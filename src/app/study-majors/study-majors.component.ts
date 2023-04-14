import { Component, HostListener } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../shared/register-modal/register-modal.component';

@Component({
  selector: 'app-study-majors',
  templateUrl: './study-majors.component.html',
  styleUrls: ['./study-majors.component.scss']
})
export class StudyMajorsComponent {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, {class: 'modal-xl modal-dialog-centered'});
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  // bodyHight

  onScroll(event) {
    let majorsSections = document.getElementById('majors-section')
    let majorsAside = document.getElementById('majorsAside')
    let bodyHeight = window.pageYOffset
    if (bodyHeight >= 1500) {
      majorsAside.style.position = 'relative'
      majorsAside.style.height = 'auto'
      majorsSections.style.marginRight = '0px'
    } else {
      majorsAside.style.position = 'fixed'
      majorsAside.style.height = '75vh'
      majorsSections.style.marginRight = '350px'
    }
  }
}
