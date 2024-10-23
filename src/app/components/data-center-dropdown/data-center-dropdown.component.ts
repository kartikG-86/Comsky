import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { dataCenterRegions } from '../../../../dataCenterRegions';
@Component({
  selector: 'app-data-center-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-center-dropdown.component.html',
  styleUrl: './data-center-dropdown.component.css'
})
export class DataCenterDropdownComponent implements OnInit {

  selectedDataCenter: any
  selectedRegion: any
  @Output() dataCenter = new EventEmitter<any>()

  dataCentersRegion = dataCenterRegions;
  ngOnInit(): void {
    const defaultDataCenter = this.dataCentersRegion.flatMap((dataCenter: any) => {
      return dataCenter.locations.filter((location: any) => {
        return location.region === 'Bangalore';
      });
    })[0];

    this.selectedRegion = defaultDataCenter
    this.selectedDataCenter = defaultDataCenter.dataCenters[0]

    this.dataCenter.emit({ dataCenter: this.selectedDataCenter })
  }
  changeDataCenterRegion(dataCenter: any, location: any) {
    this.selectedRegion = location
    this.selectedDataCenter = dataCenter
    this.dataCenter.emit({ dataCenter: this.selectedDataCenter, region: this.selectedRegion })
  }
}
