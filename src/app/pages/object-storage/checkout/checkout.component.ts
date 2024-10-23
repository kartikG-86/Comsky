import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  objectStorageForm = new FormGroup({
    dataCenter: new FormControl(),
    isEnableCDN:new FormControl(false),
    objectStorageName:new FormControl('',[Validators.required , Validators.minLength(3)])
  })

  selectedDataCenter: any
  storgagePrice = 300
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
  constructor() { }
  ngOnInit(): void {
    this.selectedDataCenter = this.dataCenters.flatMap((dataCenter: any) => {
      return dataCenter.locations.filter((location: any) => {
        return location.region === 'Bangalore';
      });
    })[0];

    this.objectStorageForm.valueChanges.subscribe((value:any) => {
      console.log(value)
    })
    this.setInitialValues()
  }

  setInitialValues() {
    this.objectStorageForm.patchValue({ dataCenter: this.selectedDataCenter })
  }

  changeDataCenterRegion(region: any) {
    this.selectedDataCenter = region
    this.objectStorageForm.patchValue({ dataCenter: region })
  }

}
