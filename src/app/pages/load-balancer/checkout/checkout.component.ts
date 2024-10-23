import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { dataCenterRegions } from '../../../../../dataCenterRegions';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatTooltipModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  loadBalancerForm = new FormGroup({
    loadBalancer: new FormControl(''),
    region: new FormControl(),
    dataCenter: new FormControl(),
    network: new FormControl(),
    loadBalancerProtocol: new FormControl(),
    instanceProtocol: new FormControl(),
    loadBalancerPort: new FormControl(),
    instancePort: new FormControl(),
    certificate: new FormControl()
  })
  chosenDataCenter: any
  totalCost = 1500
  totalNodes = 1
  selectedLoadBalancerProtocol: any
  selectedInstanceProtocol: any

  loadBalancerTypes = [
    {
      title: 'Regional',
      description: 'Distribute traffic within a single data center region.'
    },
    {
      title: "Global",
      description: 'Distribute traffic across multiple data center regions or VPCs.'
    }
  ]

  networkVisibilityOptions = [
    {
      title: 'External (Public)',
      description: 'This is the recommended option if you want your Load Balancer to handle external web traffic.'
    },
    {
      title: 'Internal (Private)',
      description: 'The load balancer will be accessible only through the private network by other resources within its VPC.'
    }
  ]

  protocols = [
    {
      loadBalancerProtocol: 'HTTP3',
      defaultPort: 443,
      isCertificate: true,
      instanceProtocols: [
        {
          protocol: 'HTTP',
          defaultPort: 80
        },
        {
          protocol: 'HTTPS',
          defaultPort: 80
        },
        {
          protocol: 'HTTP2',
          defaultPort: 80
        },
      ],
      certificates: ["Passthrough", "+ New Certificate"]
    },
    {
      loadBalancerProtocol: 'HTTP2',
      defaultPort: 443,
      isCertificate: true,
      instanceProtocols: [
        {
          protocol: 'HTTP',
          defaultPort: 80
        },
        {
          protocol: 'HTTP2',
          defaultPort: 80
        },
      ],
      certificates: ["Passthrough", "+ New Certificate"]
    },
    {
      loadBalancerProtocol: 'HTTPS',
      defaultPort: 443,
      isCertificate: true,
      instanceProtocols: [
        {
          protocol: 'HTTP',
          defaultPort: 80
        },
        {
          protocol: 'HTTPS',
          defaultPort: 80
        },
      ],
      certificates: ["Passthrough", "+ New Certificate"]
    },
    {
      loadBalancerProtocol: 'HTTP',
      defaultPort: 80,
      isCertificate: false,
      instanceProtocols: [
        {
          protocol: 'HTTP',
          defaultPort: 80
        },
        {
          protocol: 'HTTPS',
          defaultPort: 80
        },
      ]
    },
    {
      loadBalancerProtocol: 'TCP',
      defaultPort: 80,
      isCertificate: false,
      isInstanceDisabled: true,
      instanceProtocols: [
        {
          protocol: 'TCP',
          defaultPort: 80
        },
      ]
    },
    {
      loadBalancerProtocol: 'UDP',
      defaultPort: 80,
      isCertificate: false,
      isInstanceDisabled: true,
      instanceProtocols: [
        {
          protocol: 'UDP',
          defaultPort: 80
        },
      ]
    },
  ]

  defaultAdvancedSettings = [
    {
      title: 'Sticky sessions',
      value: 'Off'
    },
    {
      title: 'Health checks',
      value: 'http://0.0.0.0:80/'
    },
    {
      title: 'SSL',
      value: 'No redirect'
    },
    {
      title: 'Proxy Protocol',
      value: 'Disabled'
    },
    {
      title: 'Backend Keepalive',
      value: 'Off'
    },
    {
      title: 'HTTP Idle Timeout (seconds)',
      value: '60'
    },
  ]

  scalingConfigOptions: any[] = [
    {
      title: 'Simultaneous connections',
      value: 10000,
      isNumber: true,
      toolTipMessage: 'The number of concurrent active connections that the Load Balancer can handle at any given time.'
    },

    {
      title: 'Requests per second',
      value: 10000,
      isNumber: true,
    },
    {
      title: 'SSL connections per second',
      value: 250,
      toolTipMessage: 'These are connections that need to decrypt SSL requests at the load balancer - SSL termination.',
      isNumber: true,
    },
    {
      title: 'High Availability',
      value: 'Enabled',
      isEnable: true,
      icon: 'bi-check-circle text-success bold-icon fs-5',
      toolTipMessage: 'The number of concurrent active connections that the Load Balancer can handle at any given time.'
    },

  ]
  dataCentersRegions = dataCenterRegions

  ngOnInit() {
    this.setInitialValues()
    this.loadBalancerForm.controls.region.valueChanges.subscribe((value: any) => {
      this.loadBalancerForm.patchValue({ dataCenter: value?.dataCenters[0] })
      this.chosenDataCenter = null;
      setTimeout(() => {
        this.chosenDataCenter = value?.dataCenters[0]
      }, 1000)
    })

    this.loadBalancerForm.controls.loadBalancerProtocol.valueChanges.subscribe((value: any) => {
      console.log(value)
      this.selectedLoadBalancerProtocol = this.protocols.find((protocol: any) => protocol?.loadBalancerProtocol == value)
      this.selectedInstanceProtocol = this.selectedLoadBalancerProtocol?.instanceProtocols
      console.log(this.selectedInstanceProtocol, this.selectedLoadBalancerProtocol)
      this.loadBalancerForm.patchValue({ loadBalancerPort: this.selectedLoadBalancerProtocol?.defaultPort, instancePort: this.selectedInstanceProtocol[0]?.defaultPort })
    })


    this.selectedLoadBalancerProtocol = this.protocols[0]

  }

  selectDataCenter(dataCenter: any) {
    console.log(dataCenter)
    this.chosenDataCenter = null;
    setTimeout(() => {
      this.chosenDataCenter = dataCenter
    }, 500)
  }

  setInitialValues() {
    const defaultRegion = this.dataCentersRegions.flatMap((dataCenter: any) => {
      return dataCenter.locations.filter((location: any) => {
        return location.region === 'Bangalore';
      });
    })[0];

    this.chosenDataCenter = defaultRegion.dataCenters[0]
    this.loadBalancerForm.patchValue({ loadBalancer: this.loadBalancerTypes[0].title, region: defaultRegion, dataCenter: this.chosenDataCenter, network: this.networkVisibilityOptions[0].title, loadBalancerProtocol: this.protocols[0], instanceProtocol: this.protocols[0]?.instanceProtocols[0], loadBalancerPort: this.protocols[0]?.defaultPort, instancePort: this.protocols[0]?.instanceProtocols[0]?.defaultPort });
  }

  increment(isIncrease: boolean) {
    if (isIncrease && this.totalNodes < 6) {
      this.totalNodes += 1
    }
    else if (!isIncrease && this.totalNodes > 1) {
      this.totalNodes -= 1
    }

  }
}
