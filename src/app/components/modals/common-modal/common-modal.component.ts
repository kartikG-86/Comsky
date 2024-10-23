import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-common-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder
  ) { }
  @Input() form!: FormGroup
  @Input() heading: any
  @Input() description: any
  @Input() cancelBtn: any
  @Input() confirmBtn: any
  @Input() htmlCode: any
  @Input() formDetails: any


  ngOnInit() {
    this.form = this.formBuilder.group({});
  }

  get safeHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.htmlCode);
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
