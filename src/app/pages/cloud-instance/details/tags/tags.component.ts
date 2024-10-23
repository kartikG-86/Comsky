import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TagModalComponent } from '../../../../components/modals/tag-modal/tag-modal.component';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  bsModalRef !: BsModalRef
  constructor(private modalService: BsModalService) { }

  openTagModal() {
    this.bsModalRef = this.modalService.show(TagModalComponent, {
      class: 'modal-lg',
      backdrop: 'static'
    })

  }
}
