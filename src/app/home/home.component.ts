import { RegisterModalComponent } from './../shared/register-modal/register-modal.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Inquiry } from '../models/inquiry';
import { InquiriesService } from '../services/inquiries.service';
import { ToastrService } from 'ngx-toastr';
import AOS from "aos";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;
  medicalUpTo = 0;
  medicalStop = setInterval(() => {
    this.medicalUpTo++
    if (this.medicalUpTo == 20000) {
      clearInterval(this.medicalStop)
    }
  }, -1000)
  nationalStudentsUpTo = 0;
  nationalStudentsStop = setInterval(() => {
    this.nationalStudentsUpTo++
    if (this.nationalStudentsUpTo == 10000) {
      clearInterval(this.nationalStudentsStop)
    }
  }, -100)
  turkishStudentsUpTo = 0;
  turkishStudentsStop = setInterval(() => {
    this.turkishStudentsUpTo++
    if (this.turkishStudentsUpTo == 220000) {
      clearInterval(this.turkishStudentsStop)
    }
  }, -10000)

  constructor(private modalService: BsModalService,
    private Inquiries: InquiriesService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    AOS.init();
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
