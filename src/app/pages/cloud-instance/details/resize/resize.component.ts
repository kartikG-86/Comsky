import { Component } from '@angular/core';
import { LearnBtnComponent } from '../../../../components/learn-btn/learn-btn.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonModalComponent } from '../../../../components/modals/common-modal/common-modal.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resize',
  standalone: true,
  imports: [LearnBtnComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './resize.component.html',
  styleUrl: './resize.component.css'
})
export class ResizeComponent {
  bsModalRef !: BsModalRef
  constructor(private modalService: BsModalService) { }
  selectedResize: any
  activePlan: any
  selectedRowIndex: any

  instanceDetails: any = {
    planType: 'Basic',
    specifications: {
      memory: '1 GB',
      disk: '1 vCPU'
    }
  }

  turnOffForm = new FormGroup({
    isShowAgain: new FormControl()
  })

  resizeForm = new FormGroup({
    type: new FormControl()
  })

  resizeTypes = [{
    title: 'CPU and RAM only',
    description: 'This will only adjust the CPU and RAM of your instance, without affecting the disk size. This change can be reversed.'
  }, {
    title: 'Disk, CPU and RAM',
    description: 'This will increase the disk size, CPU, and RAM of your instance. This change is permanent and cannot be undone.'
  }]

  planTypes = [
    {
      title: 'All Types'
    },
    {
      title: 'Basic',
      subTitle: 'Shared CPU'
    },
    {
      title: 'General Purpose',
      subTitle: 'Dedicated CPU'
    },
    {
      title: 'CPU-Optimized',
      subTitle: 'Dedicated CPU'
    },
    {
      title: 'Memory-Optimized ',
      subTitle: 'Dedicated CPU'
    },
    {
      title: 'Storage-Optimized',
      subTitle: 'Dedicated CPU'
    },
  ]

  allPlans: any[] = [
    { machineType: "Basic", cpuType: "Regular Intel", vCPUs: 1, memory: "512 MB", ssd: "10 GB", transfer: "0.5 TB", price: 332 },
    { machineType: "Basic", cpuType: "Regular Intel", vCPUs: 1, memory: "1 GB", ssd: "25 GB", transfer: "1 TB", price: 498 },
    { machineType: "Basic", cpuType: "Premium AMD", vCPUs: 1, memory: "1 GB", ssd: "25 GB", transfer: "1 TB", price: 581 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 1, memory: "1 GB", ssd: "25 GB", transfer: "1 TB", price: 581 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 1, memory: "1 GB", ssd: "35 GB", transfer: "1 TB", price: 664 },
    { machineType: "Basic", cpuType: "Regular Intel", vCPUs: 1, memory: "2 GB", ssd: "50 GB", transfer: "2 TB", price: 996 },
    { machineType: "Basic", cpuType: "Premium AMD", vCPUs: 1, memory: "2 GB", ssd: "50 GB", transfer: "2 TB", price: 1167 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 1, memory: "2 GB", ssd: "50 GB", transfer: "2 TB", price: 1167 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 1, memory: "2 GB", ssd: "70 GB", transfer: "2 TB", price: 1335 },
    { machineType: "Basic", cpuType: "Regular Intel", vCPUs: 2, memory: "2 GB", ssd: "60 GB", transfer: "3 TB", price: 1999 },
    { machineType: "Basic", cpuType: "Premium AMD", vCPUs: 2, memory: "2 GB", ssd: "60 GB", transfer: "3 TB", price: 1748 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 2, memory: "2 GB", ssd: "60 GB", transfer: "3 TB", price: 1748 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 2, memory: "2 GB", ssd: "90 GB", transfer: "3 TB", price: 1999 },
    { machineType: "Basic", cpuType: "Regular Intel", vCPUs: 2, memory: "4 GB", ssd: "80 GB", transfer: "4 TB", price: 1999 },
    { machineType: "Basic", cpuType: "Premium AMD", vCPUs: 2, memory: "4 GB", ssd: "80 GB", transfer: "4 TB", price: 2324 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 2, memory: "4 GB", ssd: "80 GB", transfer: "4 TB", price: 2324 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 2, memory: "4 GB", ssd: "120 GB", transfer: "4 TB", price: 2665 },
    { machineType: "Basic", cpuType: "Premium AMD", vCPUs: 2, memory: "8 GB", ssd: "100 GB", transfer: "5 TB", price: 3488 },
    { machineType: "CPU-Optimized", cpuType: "Regular Intel", vCPUs: 2, memory: "4 GB", ssd: "25 GB", transfer: "4 TB", price: 3488 },
    { machineType: "CPU-Optimized", cpuType: "Regular Intel", vCPUs: 2, memory: "4 GB", ssd: "50 GB", transfer: "4 TB", price: 3912 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 2, memory: "8 GB", ssd: "160 GB", transfer: "5 TB", price: 3975 },
    { machineType: "Basic", cpuType: "Regular Intel", vCPUs: 4, memory: "8 GB", ssd: "160 GB", transfer: "5 TB", price: 3975 },
    { machineType: "Basic", cpuType: "Premium AMD", vCPUs: 4, memory: "8 GB", ssd: "160 GB", transfer: "5 TB", price: 4648 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 4, memory: "8 GB", ssd: "160 GB", transfer: "5 TB", price: 4648 },
    { machineType: "General Purpose", cpuType: "Regular Intel", vCPUs: 2, memory: "8 GB", ssd: "25 GB", transfer: "4 TB", price: 5236 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 4, memory: "8 GB", ssd: "240 GB", transfer: "6 TB", price: 5328 },
    { machineType: "General Purpose", cpuType: "Regular Intel", vCPUs: 2, memory: "8 GB", ssd: "50 GB", transfer: "4 TB", price: 5654 },
    { machineType: "General Purpose", cpuType: "Premium Intel", vCPUs: 2, memory: "8 GB", ssd: "30 GB", transfer: "4 TB", price: 6313 },
    { machineType: "General Purpose", cpuType: "Premium Intel", vCPUs: 2, memory: "8 GB", ssd: "60 GB", transfer: "4 TB", price: 6557 },
    { machineType: "Basic", cpuType: "Premium AMD", vCPUs: 4, memory: "16 GB", ssd: "200 GB", transfer: "8 TB", price: 6972 },
    { machineType: "Memory-Optimized", cpuType: "Regular Intel", vCPUs: 2, memory: "16 GB", ssd: "50 GB", transfer: "4 TB", price: 6972 },
    { machineType: "CPU-Optimized", cpuType: "Regular Intel", vCPUs: 4, memory: "8 GB", ssd: "50 GB", transfer: "5 TB", price: 6972 },
    { machineType: "CPU-Optimized", cpuType: "Regular Intel", vCPUs: 4, memory: "8 GB", ssd: "100 GB", transfer: "5 TB", price: 7800 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 4, memory: "16 GB", ssd: "320 GB", transfer: "8 TB", price: 7968 },
    { machineType: "Basic", cpuType: "Regular Intel", vCPUs: 8, memory: "16 GB", ssd: "320 GB", transfer: "6 TB", price: 7968 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 2, memory: "16 GB", ssd: "50 GB", transfer: "4 TB", price: 8201 },
    { machineType: "Memory-Optimized", cpuType: "Regular Intel", vCPUs: 2, memory: "16 GB", ssd: "150 GB", transfer: "4 TB", price: 8624 },
    { machineType: "CPU-Optimized", cpuType: "Premium Intel", vCPUs: 4, memory: "8 GB", ssd: "50 GB", transfer: "5 TB", price: 9053 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 2, memory: "16 GB", ssd: "150 GB", transfer: "4 TB", price: 9140 },
    { machineType: "Basic", cpuType: "Premium AMD", vCPUs: 8, memory: "16 GB", ssd: "320 GB", transfer: "6 TB", price: 9300 },
    { machineType: "Basic", cpuType: "Premium Intel", vCPUs: 8, memory: "16 GB", ssd: "320 GB", transfer: "6 TB", price: 9300 },
    { machineType: "CPU-Optimized", cpuType: "Premium Intel", vCPUs: 4, memory: "8 GB", ssd: "100 GB", transfer: "5 TB", price: 10118 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 4, memory: "16 GB", ssd: "150 GB", transfer: "4 TB", price: 10380 },
    { machineType: "CPU-Optimized", cpuType: "Premium AMD", vCPUs: 4, memory: "8 GB", ssd: "100 GB", transfer: "5 TB", price: 10380 },
    { machineType: "Memory-Optimized", cpuType: "Regular Intel", vCPUs: 4, memory: "32 GB", ssd: "50 GB", transfer: "4 TB", price: 10637 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 4, memory: "32 GB", ssd: "50 GB", transfer: "4 TB", price: 11113 },
    { machineType: "Memory-Optimized", cpuType: "Regular Intel", vCPUs: 4, memory: "32 GB", ssd: "150 GB", transfer: "4 TB", price: 11656 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 8, memory: "32 GB", ssd: "50 GB", transfer: "4 TB", price: 12287 },
    { machineType: "Memory-Optimized", cpuType: "Regular Intel", vCPUs: 8, memory: "32 GB", ssd: "150 GB", transfer: "4 TB", price: 12287 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 8, memory: "64 GB", ssd: "150 GB", transfer: "4 TB", price: 12287 },
    { machineType: "Memory-Optimized", cpuType: "Premium AMD", vCPUs: 8, memory: "64 GB", ssd: "150 GB", transfer: "4 TB", price: 13660 },
    { machineType: "Memory-Optimized", cpuType: "Regular Intel", vCPUs: 8, memory: "64 GB", ssd: "150 GB", transfer: "4 TB", price: 13660 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 8, memory: "64 GB", ssd: "250 GB", transfer: "4 TB", price: 15423 },
    { machineType: "Memory-Optimized", cpuType: "Premium AMD", vCPUs: 8, memory: "128 GB", ssd: "150 GB", transfer: "4 TB", price: 16000 },
    { machineType: "Memory-Optimized", cpuType: "Premium AMD", vCPUs: 8, memory: "128 GB", ssd: "250 GB", transfer: "4 TB", price: 16800 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 16, memory: "128 GB", ssd: "150 GB", transfer: "4 TB", price: 16800 },
    { machineType: "Memory-Optimized", cpuType: "Premium AMD", vCPUs: 16, memory: "256 GB", ssd: "150 GB", transfer: "4 TB", price: 17600 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 16, memory: "256 GB", ssd: "150 GB", transfer: "4 TB", price: 17600 },
    { machineType: "Memory-Optimized", cpuType: "Premium AMD", vCPUs: 16, memory: "256 GB", ssd: "250 GB", transfer: "4 TB", price: 18400 },
    { machineType: "Memory-Optimized", cpuType: "Premium Intel", vCPUs: 16, memory: "256 GB", ssd: "250 GB", transfer: "4 TB", price: 18400 }
  ];

  tableRows = ["", "Machine Type", "CPU Type", "vCPUs", "Memory", "SSD", "Transfer", "Price"]
  tableData: any[] = []

  ngOnInit() {
    this.setInitialValues()

    this.resizeForm.controls.type.valueChanges.subscribe((value: any) => {
      this.selectedResize = value;
      this.resizeForm.patchValue({ type: this.selectedResize }, { emitEvent: false })
    })

    // { machineType: "Basic", cpuType: "Regular Intel", vCPUs: 1, memory: "512 MB", ssd: "10 GB", transfer: "0.5 TB", price: 332 },
    this.tableData = this.allPlans.map((plan: any) => {
      return {
        "Machine Type": plan?.machineType,
        "CPU Type": plan?.cpuType,
        "vCPUs": plan?.vCPUs,
        "Memory": plan?.memory,
        "SSD": plan?.ssd,
        "Transfer": plan?.transfer,
        "Price": plan?.price
      }
    })
  }

  openTurnOffModal() {
    this.bsModalRef = this.modalService.show(CommonModalComponent, {
      class: 'modal-lg',
      backdrop: 'static'
    })

    this.bsModalRef.content.heading = "Turn off Droplet"
    this.bsModalRef.content.htmlCode = `
     <div class="para my-3 ">
            When you disable an instance from the control panel, we first attempt a graceful shutdown. If that doesn't
            succeed, a forced shutdown is executed, which could potentially lead to data corruption. To maintain data
            integrity, we advise shutting down using the command line with the <code>poweroff</code> command.
        </div>

        <div class="my-3 text-bold para">
            When a Droplet is off:

            <ul class="px-4 my-3">
                <li class="my-2">Its data and IP address are retained and its disk, CPU and RAM are reserved.
                </li>
                <li>You continue to accrue its data transfer allowance.
                </li>
            </ul>
        </div>

        <div class="my-3 text-bold">
            <i class="bi bi-exclamation-triangle-fill me-2 text-danger fs-5"></i>
            <b>Warning:</b>
            <span class="para ms-2">Even if an instance is turned off, you will still be charged. To halt the billing,
                you
                need to destroy the instance instead.</span>
        </div>

    `;

    this.bsModalRef.content.formDetails = [{
      title: "Don't show me this message again",
      id: 'isShowAgain',
      type: 'checkbox',
      category: 'checkbox',
    }]

    this.bsModalRef.content.form = this.turnOffForm

    this.bsModalRef.content.cancelBtn = 'Cancel'
    this.bsModalRef.content.confirmBtn = 'Turn Off'
  }

  setInitialValues() {
    this.selectedResize = this.resizeTypes[0]
    this.resizeForm.patchValue({ type: this.selectedResize })
  }

  activatePlan(plan: any) {
    this.activePlan = plan
  }
  selectRow(rowIndex: any) {
    this.selectedRowIndex = rowIndex
  }
}
