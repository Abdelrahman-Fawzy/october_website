import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from 'src/app/shared/register-modal/register-modal.component';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  isIntroCollapsed = false;
  isStudyCollapsed = false;
  isHousingCollapsed = false;
  isCampusCollapsed = false;
  isConfessCollapsed = false;
  isOpinionsCollapsed = false;
  faStar = faStar
  tabcontent = document.getElementsByClassName("tabContent") as HTMLCollectionOf<HTMLElement>;
  tabChildContent = document.getElementsByClassName("study_content_tab") as HTMLCollectionOf<HTMLElement>;
  tablinks = document.getElementsByClassName("tablinks");
  tabChildlinks = document.getElementsByClassName("tabChildlinks");
  slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>
  demos = document.getElementsByClassName("demo");
  slideIndex = 1;
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    document.getElementById("defaultOpen").click();
    document.getElementById("defaultChildOpen").click();
    this.showSlides(this.slideIndex)
  }

  openTab(event: any, information_type: any, child: boolean) {
    var i;

    if (!child) {
      for (i = 0; i < this.tabcontent.length; i++) {
        this.tabcontent[i].style.display = "none";
      }
    } else {
      for (i = 0; i < this.tabChildContent.length; i++) {
        this.tabChildContent[i].style.display = "none";
      }
    }

    if(!child) {
      for (i = 0; i < this.tablinks.length; i++) {
        this.tablinks[i].classList.remove("active");
      }
    } else {
      for (i = 0; i < this.tabChildlinks.length; i++) {
        this.tabChildlinks[i].classList.remove("active");
      }
    }

    if (!child) {
      document.getElementById(information_type).style.display = "block"
    }
    if (child) {
      document.getElementById(information_type).style.display = "flex"
    }
    event.target.classList.add("active")
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    if (n > this.slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = this.slides.length}
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
    for (let i = 0; i < this.demos.length; i++) {
      this.demos[i].className = this.demos[i].className.replace(" active", "");
    }
    this.slides[this.slideIndex-1].style.display = "block";
    this.demos[this.slideIndex-1].className += " active";
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, {class: 'modal-xl modal-dialog-centered'});
  }
}
