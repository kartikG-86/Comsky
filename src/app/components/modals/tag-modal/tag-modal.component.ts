import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tag-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tag-modal.component.html',
  styleUrl: './tag-modal.component.css'
})
export class TagModalComponent {
  constructor(private bsModalRef: BsModalRef) { }
  deleteTagTitle: any
  userTags: any[] = []
  tagForm = new FormGroup({
    tag: new FormControl('')
  })
  addTag(e: KeyboardEvent) {
    const tagValue = this.tagForm.value.tag?.trim();
    if (tagValue && (e.code === 'Space' || e.code == 'Enter')) {
      const isRepeat = this.userTags.find((tag: any) => tag == tagValue)
      if (!isRepeat) {
        this.userTags.unshift(tagValue);
      }
      this.resetForm();

    } else if (tagValue === '') {
      this.resetForm();
    }
  }

  activeDeleteBtn(delete_tag: any) {
    if (this.deleteTagTitle == delete_tag) {
      this.deleteTagTitle = null
    }
    else {
      this.deleteTagTitle = delete_tag
    }
  }
  deleteTag() {
    this.userTags = this.userTags.filter((tag: any) => this.deleteTagTitle != tag)
  }

  closeModal() {
    this.bsModalRef.hide()
  }

  resetForm() {
    this.tagForm.patchValue({ tag: '' })
  }
}
