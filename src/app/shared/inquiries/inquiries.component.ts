import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Inquiry } from 'src/app/models/inquiry';
import { InquiriesService } from 'src/app/services/inquiries.service';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.scss']
})
export class InquiriesComponent implements OnInit {
  inquiry: Inquiry;
  InquiryForm;
  constructor(
    private Inquiries: InquiriesService,
    private toastr: ToastrService) {
      this.InquiryForm = new FormGroup({
        customerName: new FormControl('', Validators.required),
        email: new FormControl(''),
        phone: new FormControl('', Validators.required),
        inquiry: new FormControl('', Validators.required)
      })
    }

  ngOnInit(): void {
    this.reset()
  }

  get f(){
    return this.InquiryForm.controls;
  }

  reset() {
    this.inquiry = {
      social_phone_numbers: '',
      social_customer_name: '',
      social_email: '',
      social_notes: ''
    }
  }

  Inquiry() {
    this.Inquiries.Inquiry(this.inquiry).subscribe((response: any) => {
      this.toastr.success(response.data[0].value)
      this.reset()
      this.InquiryForm.reset()
    }, error => {
      error.error.errors.map(errorValue => {
        this.toastr.error(errorValue.value)
      })
    })
  }
}
