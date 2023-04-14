import { Country } from './../../models/country';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Certificate } from 'src/app/models/certificate';
import { Register } from 'src/app/models/register';
import { CertificatesService } from 'src/app/services/certificates.service';
import { CountriesService } from 'src/app/services/countries.service';
import { RegisterService } from 'src/app/services/register.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'




@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  modalRef?: BsModalRef;
  personalPhoto
  isSubmited :boolean = false
  countries : Country
  certificates : Certificate
  registerData: Register;
  myForm;
  myFiles: File[] = []
  math = Math
  countryIndex;
  countryCode;
  uploads: FileUploadModel;
  constructor(
    private modalService: BsModalService,
    private countriesService: CountriesService,
    private certificatesService: CertificatesService,
    private registerService: RegisterService,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      phone: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      certificateType: new FormControl('', Validators.required),
      certificateOther: new FormControl('')
    })
  }
  ngOnInit(): void {
    this.getCountries()
    this.getCertificates()
    this.reset()
  }

  closeModal() {
    this.modalService.hide();
  }

  reset() {
    this.registerData = {
      social_phone_numbers: '',
      social_customer_name: '',
      social_country: '',
      social_email: '',
      social_certificate_type: '',
      social_certificate_other: '',
      paper_personal_photo: '',
      paper_qualification: '',
      paper_passport: ''
    }

    this.uploads = {
      uploads: undefined,
      type: 'normal'
    }
  }

  getCountries() {
    this.countriesService.getCountries().subscribe(country => {
      this.countries = country
    })

  }

  getCertificates() {
    this.certificatesService.getCertificates().subscribe(certificate => {
      this.certificates = certificate
    })
  }

  getCountryCode() {
    this.countryIndex = this.countries.data.list.findIndex(object => {
      return object.country_id == Number(this.registerData.social_country)
    })
    this.countryCode = this.countries.data.list[this.countryIndex].country_phone_code
  }

  get f(){
    return this.myForm.controls;
  }
  handleFileInput(event: any) {
    this.uploads.uploads = event.target.files[0];
    this.myFiles.push(this.uploads.uploads)
    console.log(this.myFiles);

    this.postFile(this.uploads.uploads).subscribe((res: any) => {
      console.log(res);
      if(event.target.id == 'personalPhoto') this.registerData.paper_personal_photo = res.data.uploads;
      else if (event.target.id == 'qualifiaction') this.registerData.paper_qualification = res.data.uploads;
      else if (event.target.id == 'passport') this.registerData.paper_passport = res.data.uploads;
    }, err => {
      console.log(err);
    })
  }

  postFile(fileToUpload: File) {
    const endpoint = 'https://6oaerp.6oa.edu.eg/api/erp/socials/social_upload_files';
    const formData: FormData = new FormData();
    formData.append('uploads', fileToUpload, fileToUpload.name);
    formData.append('type', 'normal')
    return this.http
      .post(endpoint, formData).pipe(
        map((res) => { return res; }),
      )
}

  RegisterWithUs() {
    console.log(this.registerData);

    this.registerService.Register(this.registerData).subscribe(response => {
      console.log(response);
      this.isSubmited = true;
    }, error => {
      error.error.errors.forEach(errorValue => {
        this.toastr.error(errorValue.value)
        this.isSubmited = false;
      })
    })
  }
}

export class FileUploadModel {
  uploads: File;
  type: string;
}
