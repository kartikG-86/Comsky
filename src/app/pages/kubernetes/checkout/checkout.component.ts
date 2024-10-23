import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataCenterDropdownComponent } from '../../../components/data-center-dropdown/data-center-dropdown.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatTooltipModule , DataCenterDropdownComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  kubernetesForm = new FormGroup({
    dataCenter: new FormControl(),
    version: new FormControl(''),
    cpuType: new FormControl('Shared CPU'),
    machineType: new FormControl(),
    poolName:new FormControl('dfdfdfd'),
    diskType: new FormControl(),
    plan: new FormControl(),
    quantity: new FormControl(3),
    clusterName: new FormControl('')
  })

  selectedDataCenter: any
  selectedVersion: any
  selectedCPU: any
  selectedMachine: any
  selectedMachinePlans: any
  selectedPlan: any
  totalNodesInPool = 3
  totalNodePool = 1
  allNodePools:any[] = []
  dataCenters = [
    {
      continent: "North America",
      locations: [
        { region: "New York", dataCenter: "Datacenter 1", code: "NYC1", image: 'images/new-york-flag.png', },
        { region: "New York", dataCenter: "Datacenter 2", code: "NYC2", image: 'images/new-york-flag.png', },
        { region: "New York", dataCenter: "Datacenter 3", code: "NYC3", image: 'images/new-york-flag.png', },
        { region: "Toronto", dataCenter: "Datacenter 1", code: "TOR1", image: 'images/canada-flag.png', },
        { region: "San Francisco", dataCenter: "Datacenter 2", code: "SFO2", image: 'images/new-york-flag.png', },
        { region: "San Francisco", dataCenter: "Datacenter 3", code: "SFO3", image: 'images/new-york-flag.png', }
      ]
    },
    {
      continent: "Asia",
      locations: [
        { region: "Singapore", dataCenter: "Datacenter 1", code: "SGP1", image: 'images/singapore-flag.png', },
        { region: "Bangalore", dataCenter: "Datacenter 1", code: "BLR1", image: 'images/india-flag.png', }
      ]
    },
    {
      continent: "Europe",
      locations: [
        { region: "London", dataCenter: "Datacenter 1", code: "LON1", image: 'images/london-flag.png', },
        { region: "Amsterdam", dataCenter: "Datacenter 3", code: "AMS3", image: 'images/netherland-flag.png', },
        { region: "Frankfurt", dataCenter: "Datacenter 1", code: "FRA1", image: 'images/germany-flag.png', }
      ]
    },
    {
      continent: "Australia",
      locations: [
        { region: "Sydney", dataCenter: "Datacenter 1", code: "SYD1", image: 'images/australia-flag.png', }
      ]
    }
  ];

  kubernetesVersions = [
    { version: "1.31.1-do.3", label: "Recommended" },
    { version: "1.31.1-do.3", label: "Recommended" },
    { version: "1.30.5-do.3", label: "" },
    { version: "1.29.9-do.3", label: "" },
    { version: "1.28.14-do.3", label: "" }
  ];

  cpuTypes = [{
    title: 'Shared CPU',
    description: 'Ideal for testing, low-traffic servers, and workloads that don’t require intensive CPU usage. The CPUs are shared with other Instances.',
    machineTypes: [
      {
        category: "Basic",
        storage: "Regular SSD",
        plans: [
          {
            ssd: 1,
            prices: [
              { pricePerMonth: 996.00, pricePerHour: 1.49, ram: "2 GB", vCPU: "1", storage: "50 GB" },
              { pricePerMonth: 1494.00, pricePerHour: 2.24, ram: "2 GB", vCPU: "2", storage: "60 GB" },
              { pricePerMonth: 1992.00, pricePerHour: 2.99, ram: "4 GB", vCPU: "2", storage: "80 GB" },
              { pricePerMonth: 3984.00, pricePerHour: 5.89, ram: "8 GB", vCPU: "4", storage: "160 GB" },
              { pricePerMonth: 7968.00, pricePerHour: 11.87, ram: "16 GB", vCPU: "8", storage: "320 GB" }
            ]
          },
        ]
      },
      {
        category: "Basic - Premium Intel",
        storage: "NVMe SSD",
        plans: [
          {
            ssd: 1,
            prices: [{ pricePerMonth: 1199.76, pricePerHour: 1.20, ram: "2 GB", vCPU: "1", storage: "70 GB" },
            { pricePerMonth: 1799.64, pricePerHour: 1.80, ram: "2 GB", vCPU: "2", storage: "90 GB" },
            { pricePerMonth: 2399.52, pricePerHour: 2.40, ram: "4 GB", vCPU: "2", storage: "120 GB" },
            { pricePerMonth: 3599.28, pricePerHour: 3.60, ram: "8 GB", vCPU: "2", storage: "160 GB" },
            { pricePerMonth: 4799.04, pricePerHour: 4.80, ram: "8 GB", vCPU: "4", storage: "240 GB" },
            { pricePerMonth: 7198.56, pricePerHour: 7.20, ram: "16 GB", vCPU: "4", storage: "320 GB" },
            { pricePerMonth: 9598.08, pricePerHour: 9.60, ram: "16 GB", vCPU: "8", storage: "480 GB" },
            { pricePerMonth: 14397.12, pricePerHour: 14.40, ram: "32 GB", vCPU: "8", storage: "640 GB" },]
          }
        ]
      },
      {
        category: "Basic - Premium AMD",
        storage: "NVMe SSD",
        plans: [
          {
            ssd: 1,
            prices: [
              { pricePerMonth: 1049.64, pricePerHour: 1.05, ram: "2 GB", vCPU: "1", storage: "50 GB" },
              { pricePerMonth: 1574.46, pricePerHour: 1.57, ram: "2 GB", vCPU: "2", storage: "60 GB" },
              { pricePerMonth: 2099.28, pricePerHour: 2.10, ram: "4 GB", vCPU: "2", storage: "80 GB" },
              { pricePerMonth: 3149.34, pricePerHour: 3.15, ram: "8 GB", vCPU: "2", storage: "100 GB" },
              { pricePerMonth: 4199.40, pricePerHour: 4.20, ram: "8 GB", vCPU: "4", storage: "160 GB" },
              { pricePerMonth: 6299.52, pricePerHour: 6.30, ram: "16 GB", vCPU: "4", storage: "200 GB" },
              { pricePerMonth: 8399.64, pricePerHour: 8.40, ram: "16 GB", vCPU: "8", storage: "320 GB" },
              { pricePerMonth: 12599.76, pricePerHour: 12.60, ram: "32 GB", vCPU: "8", storage: "400 GB" },
            ]
          }
        ]
      }
    ],

  }, {
    title: "Dedicated CPU",
    description: 'Perfect for medium to high-traffic servers, CI/CD pipelines, video encoding, high-performance databases, and analytics. CPUs are fully dedicated for exclusive use.',
    machineTypes: [
      {
        category: "CPU-Optimized",
        storage: "Regular SSD",
        network: "Up to 2 Gbps",
        plans: [{
          ssd: 1,
          prices: [
            { "pricePerMonth": 291083.62, "pricePerHour": 436.23, "ram": "4 GB", "vCPU": "2", "storage": "25 GB" },
            { "pricePerMonth": 582167.25, "pricePerHour": 866.63, "ram": "8 GB", "vCPU": "4", "storage": "50 GB" }
          ]
        }]
      },
      {
        category: "General Purpose",
        storage: "Regular SSD",
        network: "Up to 2 Gbps",
        plans: [{
          ssd: 1,
          prices: [
            { pricePerMonth: 4662.66, pricePerHour: 6.93, ram: "8 GB", vCPU: "2", storage: "25 GB" },
            { pricePerMonth: 9325.32, pricePerHour: 13.55, ram: "16 GB", vCPU: "4", storage: "50 GB" },
            { pricePerMonth: 4973.80, pricePerHour: 7.41, ram: "8 GB", vCPU: "2", storage: "50 GB" },
            { pricePerMonth: 9947.60, pricePerHour: 14.23, ram: "16 GB", vCPU: "4", storage: "100 GB" },
          ]
        }]
      },
      {
        category: "Memory-Optimized",
        storage: "Regular SSD",
        network: "",
        plans: [{
          ssd: 1,
          prices: [
            { pricePerMonth: 6054.84, pricePerHour: 9.14, ram: "16 GB", vCPU: "2", storage: "50 GB" },
            { pricePerMonth: 12109.68, pricePerHour: 18.29, ram: "32 GB", vCPU: "4", storage: "100 GB" },
          ]
        },
        {
          ssd: 3,
          prices: [
            { pricePerMonth: 7478.56, pricePerHour: 11.36, ram: "16 GB", vCPU: "2", storage: "150 GB" },
            { pricePerMonth: 14957.12, pricePerHour: 22.09, ram: "32 GB", vCPU: "4", storage: "300 GB" },
          ]
        },
        {
          ssd: 6,
          prices: [
            { pricePerMonth: 9366.66, pricePerHour: 14.65, ram: "16 GB", vCPU: "2", storage: "300 GB" },
            { pricePerMonth: 18733.31, pricePerHour: 29.31, ram: "32 GB", vCPU: "4", storage: "600 GB" },
          ]
        }
        ]
      },
      {
        category: "Storage-Optimized",
        storage: "NVMe SSD",
        network: "",
        plans: [{
          ssd: 1.5,
          prices: [
            { pricePerMonth: 11779.99, pricePerHour: 18.63, ram: "16 GB", vCPU: "2", storage: "450 GB" },
            { pricePerMonth: 23559.97, pricePerHour: 37.26, ram: "32 GB", vCPU: "4", storage: "900 GB" },
          ]
        }]
      }
    ],

  }, {
    title: "GPU",
    description: 'Ideal for machine learning and data science workloads, with necessary GPU drivers installed automatically.',
    machineTypes: [],
    plans: []
  }]

  constructor() { }
  ngOnInit(): void {
    this.selectedDataCenter = this.dataCenters.flatMap((dataCenter: any) => {
      return dataCenter.locations.filter((location: any) => {
        return location.region === 'Bangalore';
      });
    })[0];
    this.selectedVersion = this.kubernetesVersions[0]
    this.selectedCPU = this.cpuTypes[0]

    if (this.selectedCPU?.machineTypes.length > 0) {
      this.selectedMachine = this.selectedCPU.machineTypes[0];
      this.selectedMachinePlans = this.selectedMachine.plans[0];
      this.selectedPlan = this.selectedMachinePlans.prices[0]
      this.kubernetesForm.patchValue({ machineType: this.selectedMachine, diskType: this.selectedMachinePlans.ssd, plan: this.selectedPlan, dataCenter: this.selectedDataCenter, version: this.selectedVersion })
    }

    this.kubernetesForm.controls.cpuType.valueChanges.subscribe((value: any) => {
      this.changeCPU(value)
    })
    this.kubernetesForm.controls.machineType.valueChanges.subscribe((value: any) => {
      this.selectedMachine = value
      this.kubernetesForm.patchValue({ diskType: this.selectedMachine.plans[0].ssd })
    })

    this.kubernetesForm.controls.diskType.valueChanges.subscribe((value: any) => {
      this.selectedMachinePlans = this.selectedMachine.plans.find((plan: any) => plan.ssd == value);
      this.kubernetesForm.patchValue({ plan: this.selectedMachinePlans.prices[0] })
    })
    this.kubernetesForm.controls.plan.valueChanges.subscribe((value: any) => {
      this.selectedPlan = value
    })

  }

  changeDataCenterRegion(region: any) {
    this.selectedDataCenter = region
    this.kubernetesForm.patchValue({ dataCenter: region })
  }

  changeVersion(version: any) {
    this.selectedVersion = version;
    this.kubernetesForm.patchValue({ version: version.version })
  }

  changeCPU(cpu: any) {
    this.selectedCPU = this.cpuTypes.find((cpuType: any) => cpuType.title == cpu)
    if (this.selectedCPU.machineTypes.length > 0) {
      this.kubernetesForm.patchValue({ machineType: this.selectedCPU.machineTypes[0] })
    }
  }

  addOrRemoveMachine(isIncrease: any) {
    if (isIncrease && this.totalNodesInPool < 10) {
      this.totalNodesInPool += 1;
    }
    else if (!isIncrease) {
      if (this.totalNodesInPool >= 2) {
        this.totalNodesInPool -= 1;
      }
    }
    this.kubernetesForm.patchValue({ quantity: this.totalNodesInPool })
  }

  onSubmit() {
    console.log(this.kubernetesForm.value)
  }

  addMorePool(){
    this.totalNodePool += 1
  }

  deleteCurrentPool(){
    this.totalNodePool -= 1
  }

}
