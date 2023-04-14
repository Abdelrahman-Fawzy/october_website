import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Inquiry } from '../models/inquiry';
import { InquiriesService } from '../services/inquiries.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  constructor() {

  }
}
