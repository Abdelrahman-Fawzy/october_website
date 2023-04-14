import { RegisterModalComponent } from './../shared/register-modal/register-modal.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Inquiry } from '../models/inquiry';
import { InquiriesService } from '../services/inquiries.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService,
    private Inquiries: InquiriesService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
  }

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

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, {class: 'modal-xl modal-dialog-centered'});
  }

}
