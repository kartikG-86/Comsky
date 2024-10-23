import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReservedIpModalComponent } from '../../components/modals/reserved-ip-modal/reserved-ip-modal.component';
@Component({
  selector: 'app-reserved-ips',
  standalone: true,
  imports: [],
  templateUrl: './reserved-ips.component.html',
  styleUrl: './reserved-ips.component.css'
})
export class ReservedIpsComponent {
  bsModalRef!: BsModalRef;

  constructor(
    private modalService: BsModalService
  ){

  }
  ReservedIpModal() {

    this.bsModalRef = this.modalService.show(ReservedIpModalComponent, {
      class: 'modal-lg',
      backdrop: 'static'
    });


  }
}
