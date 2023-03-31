import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  modalRef?: BsModalRef;
  fileName
  fileSize
  isSubmited :boolean = false
  constructor(private modalService: BsModalService) {}
  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.hide();
  }

  fileSelected(event) {
    const actualBtn = document.getElementById('uploadBtn');

    const fileChosen = document.getElementById('file-chosen');

    console.log(event);
    this.fileName = event.target.files[0].name;
  }
}
