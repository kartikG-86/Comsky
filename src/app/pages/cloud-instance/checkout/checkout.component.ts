import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { dataCenterRegions } from '../../../../../dataCenterRegions';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  defaultDataCenterRegion: any
  defaultDataCenter: any
  defaultOS: any
  defaultInstance: any
  defaultCPU: any
  defaultAuthMethod: any
  selectedDataCenterRegion: any
  selectedDataCenter: any
  selectedVersion: any
  selectedPlan: any
  sameConfigurationMachines = 1
  isShowPassword: boolean = false
  pricePermonth = 0
  pricePerHour = 0
  dataCentersRegion = dataCenterRegions

  operatingSystems = [
    {
      title: "Window",
      image: 'images/window.png',
      versions: ["Windows 11 Version 23H2", "Windows 11 Version 22H2", "Windows 10 Version 22H2"]
    },
    {
      title: "Ubuntu",
      image: 'images/ubuntu.png',
      versions: ["24.10 x64", "24.04 (LTS) x64", "22.04 (LTS) x64", "20.04 (LTS) x64"]
    },
    {
      title: "Fedora",
      image: 'images/fedora.png',
      versions: ["40 x64", "39 x64"],
      defaultMessage: 'This distribution requires an SSH Key.'
    },
    {
      title: "Debian",
      image: 'images/debian.png',
      versions: ["12 x64", "11 x64"]
    },
    {
      title: "Centos",
      image: 'images/centos.png',
      versions: ["9 Stream x64"]
    },
    {
      title: "Alma Linux",
      image: 'images/almalinux.png',
      versions: ["AlmaLinux 9", "AlmaLinux 8"]
    },
    {
      title: "Rocky Linux",
      image: 'images/rockylinux.png',
      versions: ["9 x64", "8 x64"],
      defaultMessage: 'This distribution requires an SSH Key.'
    },
  ]

  instanceTypes = [
    {
      title: "Basic",
      description: `Basic virtual machines with a mix of memory and compute resources. Best for small projects that can handle variable levels of CPU performance, like blogs, web apps and dev/test environments.`,
      cpuOptions: [
        {
          title: 'Regular',
          diskType: 'SSD',
          plans: [
            {
              "pricePerMonthINR": 332,
              "pricePerHourINR": 0.5,
              "ramCpu": "512 MB / 1 CPU",
              "storage": "10 GB SSD Disk",
              "transfer": "500 GB transfer"
            },
            {
              "pricePerMonthINR": 498,
              "pricePerHourINR": 0.75,
              "ramCpu": "1 GB / 1 CPU",
              "storage": "25 GB SSD Disk",
              "transfer": "1000 GB transfer"
            },
            {
              "pricePerMonthINR": 996,
              "pricePerHourINR": 1.49,
              "ramCpu": "2 GB / 1 CPU",
              "storage": "50 GB SSD Disk",
              "transfer": "2 TB transfer"
            },
            {
              "pricePerMonthINR": 1494,
              "pricePerHourINR": 2.24,
              "ramCpu": "2 GB / 2 CPUs",
              "storage": "60 GB SSD Disk",
              "transfer": "3 TB transfer"
            },
            {
              "pricePerMonthINR": 1992,
              "pricePerHourINR": 2.98,
              "ramCpu": "4 GB / 2 CPUs",
              "storage": "80 GB SSD Disk",
              "transfer": "4 TB transfer"
            },
            {
              "pricePerMonthINR": 3984,
              "pricePerHourINR": 5.89,
              "ramCpu": "8 GB / 4 CPUs",
              "storage": "160 GB SSD Disk",
              "transfer": "5 TB transfer"
            },
            {
              "pricePerMonthINR": 7968,
              "pricePerHourINR": 11.78,
              "ramCpu": "16 GB / 8 CPUs",
              "storage": "320 GB SSD Disk",
              "transfer": "6 TB transfer"
            }
          ]
        },
        {
          title: 'Premium Intel',
          diskType: 'NVMe SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          plans: [
            { "ramCpu": "1 GB / 1 Intel CPU", "storage": "35 GB NVMe SSDs", "transfer": "1000 GB transfer", "pricePerMonthINR": 664, "pricePerHourINR": 1.0 },
            { "ramCpu": "2 GB / 1 Intel CPU", "storage": "70 GB NVMe SSDs", "transfer": "2 TB transfer", "pricePerMonthINR": 1328, "pricePerHourINR": 1.99 },
            { "ramCpu": "2 GB / 2 Intel CPUs", "storage": "90 GB NVMe SSDs", "transfer": "3 TB transfer", "pricePerMonthINR": 1992, "pricePerHourINR": 2.99 },
            { "ramCpu": "4 GB / 2 Intel CPUs", "storage": "120 GB NVMe SSDs", "transfer": "4 TB transfer", "pricePerMonthINR": 2656, "pricePerHourINR": 3.98 },
            { "ramCpu": "8 GB / 2 Intel CPUs", "storage": "160 GB NVMe SSDs", "transfer": "5 TB transfer", "pricePerMonthINR": 3984, "pricePerHourINR": 5.89 },
            { "ramCpu": "8 GB / 4 Intel CPUs", "storage": "240 GB NVMe SSDs", "transfer": "6 TB transfer", "pricePerMonthINR": 5312, "pricePerHourINR": 7.88 },
            { "ramCpu": "16 GB / 4 Intel CPUs", "storage": "320 GB NVMe SSDs", "transfer": "8 TB transfer", "pricePerMonthINR": 7968, "pricePerHourINR": 11.87 },
            { "ramCpu": "16 GB / 8 Intel CPUs", "storage": "480 GB NVMe SSDs", "transfer": "9 TB transfer", "pricePerMonthINR": 10624, "pricePerHourINR": 15.77 },
            { "ramCpu": "32 GB / 8 Intel CPUs", "storage": "640 GB NVMe SSDs", "transfer": "10 TB transfer", "pricePerMonthINR": 15936, "pricePerHourINR": 23.74 }
          ]
        },
        {
          title: 'Premium AMD',
          diskType: 'NVMe SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          plans: [
            {
              "pricePerMonthINR": 581,
              "pricePerHourINR": 0.83,
              "ramCpu": "1 GB / 1 AMD CPU",
              "storage": "25 GB NVMe SSDs",
              "transfer": "1000 GB transfer"
            },
            {
              "pricePerMonthINR": 1162,
              "pricePerHourINR": 1.74,
              "ramCpu": "2 GB / 1 AMD CPU",
              "storage": "50 GB NVMe SSDs",
              "transfer": "2 TB transfer"
            },
            {
              "pricePerMonthINR": 1743,
              "pricePerHourINR": 2.57,
              "ramCpu": "2 GB / 2 AMD CPUs",
              "storage": "60 GB NVMe SSDs",
              "transfer": "3 TB transfer"
            },
            {
              "pricePerMonthINR": 2324,
              "pricePerHourINR": 3.49,
              "ramCpu": "4 GB / 2 AMD CPUs",
              "storage": "80 GB NVMe SSDs",
              "transfer": "4 TB transfer"
            },
            {
              "pricePerMonthINR": 3486,
              "pricePerHourINR": 5.23,
              "ramCpu": "8 GB / 2 AMD CPUs",
              "storage": "100 GB NVMe SSDs",
              "transfer": "5 TB transfer"
            },
            {
              "pricePerMonthINR": 4648,
              "pricePerHourINR": 6.89,
              "ramCpu": "8 GB / 4 AMD CPUs",
              "storage": "160 GB NVMe SSDs",
              "transfer": "5 TB transfer"
            },
            {
              "pricePerMonthINR": 6972,
              "pricePerHourINR": 10.38,
              "ramCpu": "16 GB / 4 AMD CPUs",
              "storage": "200 GB NVMe SSDs",
              "transfer": "8 TB transfer"
            },
            {
              "pricePerMonthINR": 9296,
              "pricePerHourINR": 13.86,
              "ramCpu": "16 GB / 8 AMD CPUs",
              "storage": "320 GB NVMe SSDs",
              "transfer": "6 TB transfer"
            },
            {
              "pricePerMonthINR": 13944,
              "pricePerHourINR": 20.75,
              "ramCpu": "32 GB / 8 AMD CPUs",
              "storage": "400 GB NVMe SSDs",
              "transfer": "10 TB transfer"
            }
          ]

        },
      ]
    },
    {
      title: "General Purpose",
      description: 'High performance virtual machines with a good balance of memory and dedicated hyper-threads from best in class Intel processors. A great choice for a wide range of mainstream, production workloads, like web app hosting, e-commerce sites, medium-sized databases, and enterprise applications.',
      cpuOptions: [
        {
          title: 'Regular Intel',
          diskType: 'SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          networkType: 'Up to 2 Gbps',
          networkToolTipMessage: 'Network throughput is the maximum amount of data this instance can transfer per second at any given time.',
          plans: [
            {
              "pricePerMonthINR": 5229,
              "pricePerHourINR": 7.80,
              "ramCpu": "8 GB / 2 CPUs",
              "storage": "25 GB SSD Disk",
              "transfer": "4 TB transfer"
            },
            {
              "pricePerMonthINR": 10458,
              "pricePerHourINR": 15.58,
              "ramCpu": "16 GB / 4 CPUs",
              "storage": "50 GB SSD Disk",
              "transfer": "5 TB transfer"
            },
            {
              "pricePerMonthINR": 20916,
              "pricePerHourINR": 31.13,
              "ramCpu": "32 GB / 8 CPUs",
              "storage": "100 GB SSD Disk",
              "transfer": "6 TB transfer"
            },
            {
              "pricePerMonthINR": 41832,
              "pricePerHourINR": 62.25,
              "ramCpu": "64 GB / 16 CPUs",
              "storage": "200 GB SSD Disk",
              "transfer": "7 TB transfer"
            },
            {
              "pricePerMonthINR": 83664,
              "pricePerHourINR": 124.50,
              "ramCpu": "128 GB / 32 CPUs",
              "storage": "400 GB SSD Disk",
              "transfer": "8 TB transfer"
            },
            {
              "pricePerMonthINR": 104580,
              "pricePerHourINR": 155.63,
              "ramCpu": "160 GB / 40 CPUs",
              "storage": "500 GB SSD Disk",
              "transfer": "9 TB transfer"
            }
          ]
        },
        {
          title: 'Premium Intel',
          diskType: 'NVMe SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          isNew: true,
          networkType: 'Up to 10 Gbps',
          networkToolTipMessage: 'Network throughput is the maximum amount of data this instance can transfer per second at any given time.',
          plans: [
            {
              "pricePerMonthINR": 6308,
              "pricePerHourINR": 9.38,
              "ramCpu": "8 GB / 2 CPUs",
              "storage": "30 GB NVMe SSDs",
              "transfer": "4 TB transfer"
            },
            {
              "pricePerMonthINR": 12533,
              "pricePerHourINR": 18.68,
              "ramCpu": "16 GB / 4 CPUs",
              "storage": "60 GB NVMe SSDs",
              "transfer": "5 TB transfer"
            },
            {
              "pricePerMonthINR": 25066,
              "pricePerHourINR": 37.27,
              "ramCpu": "32 GB / 8 CPUs",
              "storage": "120 GB NVMe SSDs",
              "transfer": "6 TB transfer"
            },
            {
              "pricePerMonthINR": 50115,
              "pricePerHourINR": 74.70,
              "ramCpu": "64 GB / 16 CPUs",
              "storage": "240 GB NVMe SSDs",
              "transfer": "7 TB transfer"
            },
            {
              "pricePerMonthINR": 100430,
              "pricePerHourINR": 149.48,
              "ramCpu": "128 GB / 32 CPUs",
              "storage": "480 GB NVMe SSDs",
              "transfer": "8 TB transfer"
            },
            {
              "pricePerMonthINR": 150662,
              "pricePerHourINR": 224.07,
              "ramCpu": "192 GB / 48 CPUs",
              "storage": "720 GB NVMe SSDs",
              "transfer": "9 TB transfer"
            },
            {
              "pricePerMonthINR": 188327,
              "pricePerHourINR": 280.21,
              "ramCpu": "240 GB / 60 CPUs",
              "storage": "900 GB NVMe SSDs",
              "transfer": "10 TB transfer"
            }
          ]
        },
      ]
    },
    {
      title: "CPU-Optimized",
      description: 'Compute-optimized virtual machines with dedicated hyper-threads from best in class Intel processors. Best for CPU-intensive applications like CI/CD, video encoding and transcoding, machine learning, ad serving, batch processing, and active front-end web and application servers.',
      cpuOptions: [
        {
          title: 'Regular Intel',
          diskType: 'SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          networkType: 'Up to 2 Gbps',
          networkToolTipMessage: 'Network throughput is the maximum amount of data this instance can transfer per second at any given time.',
          plans: [
            {
              "pricePerMonthINR": 3486,
              "pricePerHourINR": 5.23,
              "ramCpu": "4 GB / 2 CPUs",
              "storage": "25 GB SSD Disk",
              "transfer": "4 TB transfer"
            },
            {
              "pricePerMonthINR": 6966,
              "pricePerHourINR": 10.38,
              "ramCpu": "8 GB / 4 CPUs",
              "storage": "50 GB SSD Disk",
              "transfer": "5 TB transfer"
            },
            {
              "pricePerMonthINR": 13944,
              "pricePerHourINR": 20.75,
              "ramCpu": "16 GB / 8 CPUs",
              "storage": "100 GB SSD Disk",
              "transfer": "6 TB transfer"
            },
            {
              "pricePerMonthINR": 27888,
              "pricePerHourINR": 41.50,
              "ramCpu": "32 GB / 16 CPUs",
              "storage": "200 GB SSD Disk",
              "transfer": "7 TB transfer"
            },
            {
              "pricePerMonthINR": 55896,
              "pricePerHourINR": 83.00,
              "ramCpu": "64 GB / 32 CPUs",
              "storage": "400 GB SSD Disk",
              "transfer": "9 TB transfer"
            },
            {
              "pricePerMonthINR": 83664,
              "pricePerHourINR": 124.50,
              "ramCpu": "96 GB / 48 CPUs",
              "storage": "600 GB SSD Disk",
              "transfer": "11 TB transfer"
            }
          ]

        },
        {
          title: 'Premium Intel',
          diskType: 'NVMe SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          isNew: true,
          networkType: 'Up to 10 Gbps',
          networkToolTipMessage: 'Network throughput is the maximum amount of data this instance can transfer per second at any given time.',
          plans: [
            {
              "pricePerMonthINR": 9047,
              "pricePerHourINR": 13.45,
              "ramCpu": "8 GB / 4 CPUs",
              "storage": "50 GB NVMe SSDs",
              "transfer": "5 TB transfer"
            },
            {
              "pricePerMonthINR": 18194,
              "pricePerHourINR": 26.89,
              "ramCpu": "16 GB / 8 CPUs",
              "storage": "100 GB NVMe SSDs",
              "transfer": "6 TB transfer"
            },
            {
              "pricePerMonthINR": 36271,
              "pricePerHourINR": 53.95,
              "ramCpu": "32 GB / 16 CPUs",
              "storage": "200 GB NVMe SSDs",
              "transfer": "7 TB transfer"
            },
            {
              "pricePerMonthINR": 72542,
              "pricePerHourINR": 108.98,
              "ramCpu": "64 GB / 32 CPUs",
              "storage": "400 GB NVMe SSDs",
              "transfer": "9 TB transfer"
            },
            {
              "pricePerMonthINR": 108730,
              "pricePerHourINR": 161.67,
              "ramCpu": "96 GB / 48 CPUs",
              "storage": "600 GB NVMe SSDs",
              "transfer": "11 TB transfer"
            },
            {
              "pricePerMonthINR": 135037,
              "pricePerHourINR": 202.44,
              "ramCpu": "120 GB / 60 CPUs",
              "storage": "750 GB NVMe SSDs",
              "transfer": "12 TB transfer"
            }
          ]

        },
      ]
    },
    {
      title: "Memory-Optimized",
      description: 'Memory-rich virtual machines with super fast NVMe storage, 8GB of RAM per vCPU and dedicated hyper-threads from best-in-class Intel processors. Ideal for RAM-intensive applications like high-performance databases, web scale in-memory caches, and real-time big data processing.',
      cpuOptions: [
        {
          title: 'Regular Intel',
          diskType: 'SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          networkType: 'Up to 2 Gbps',
          networkToolTipMessage: 'Network throughput is the maximum amount of data this instance can transfer per second at any given time.',
          plans: [
            {
              "pricePerMonthINR": 6706,
              "pricePerHourINR": 10.44,
              "ramCpu": "16 GB / 2 CPUs",
              "storage": "50 GB NVMe SSDs",
              "transfer": "4 TB transfer"
            },
            {
              "pricePerMonthINR": 13412,
              "pricePerHourINR": 20.88,
              "ramCpu": "32 GB / 4 CPUs",
              "storage": "100 GB NVMe SSDs",
              "transfer": "6 TB transfer"
            },
            {
              "pricePerMonthINR": 26824,
              "pricePerHourINR": 41.76,
              "ramCpu": "64 GB / 8 CPUs",
              "storage": "200 GB NVMe SSDs",
              "transfer": "7 TB transfer"
            },
            {
              "pricePerMonthINR": 53648,
              "pricePerHourINR": 83.53,
              "ramCpu": "128 GB / 16 CPUs",
              "storage": "400 GB NVMe SSDs",
              "transfer": "8 TB transfer"
            },
            {
              "pricePerMonthINR": 80472,
              "pricePerHourINR": 123.83,
              "ramCpu": "192 GB / 24 CPUs",
              "storage": "600 GB NVMe SSDs",
              "transfer": "9 TB transfer"
            },
            {
              "pricePerMonthINR": 107776,
              "pricePerHourINR": 164.35,
              "ramCpu": "256 GB / 32 CPUs",
              "storage": "800 GB NVMe SSDs",
              "transfer": "10 TB transfer"
            }
          ]

        },
        {
          title: 'Premium Intel',
          diskType: 'NVMe SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          isNew: true,
          networkType: 'Up to 10 Gbps',
          networkToolTipMessage: 'Network throughput is the maximum amount of data this instance can transfer per second at any given time.',
          plans: [
            {
              "pricePerMonthINR": 8193,
              "pricePerHourINR": 12.54,
              "ramCpu": "16 GB / 2 CPUs",
              "storage": "50 GB NVMe SSDs",
              "transfer": "4 TB transfer"
            },
            {
              "pricePerMonthINR": 16386,
              "pricePerHourINR": 25.09,
              "ramCpu": "32 GB / 4 CPUs",
              "storage": "100 GB NVMe SSDs",
              "transfer": "6 TB transfer"
            },
            {
              "pricePerMonthINR": 32772,
              "pricePerHourINR": 50.18,
              "ramCpu": "64 GB / 8 CPUs",
              "storage": "200 GB NVMe SSDs",
              "transfer": "7 TB transfer"
            },
            {
              "pricePerMonthINR": 65544,
              "pricePerHourINR": 100.35,
              "ramCpu": "128 GB / 16 CPUs",
              "storage": "400 GB NVMe SSDs",
              "transfer": "8 TB transfer"
            },
            {
              "pricePerMonthINR": 98316,
              "pricePerHourINR": 148.40,
              "ramCpu": "192 GB / 24 CPUs",
              "storage": "600 GB NVMe SSDs",
              "transfer": "9 TB transfer"
            },
            {
              "pricePerMonthINR": 131088,
              "pricePerHourINR": 198.52,
              "ramCpu": "256 GB / 32 CPUs",
              "storage": "800 GB NVMe SSDs",
              "transfer": "10 TB transfer"
            },
            {
              "pricePerMonthINR": 197308,
              "pricePerHourINR": 297.80,
              "ramCpu": "384 GB / 48 CPUs",
              "storage": "1.17 TB NVMe SSDs",
              "transfer": "11 TB transfer"
            }
          ]

        },
      ]
    },
    {
      title: "Storage-Optimized",
      description: 'Cloud Instance with large amounts of super fast NVMe storage, suitable for large NoSQL databases (e.g. MongoDB, Elasticsearch), time series databases, and other data warehouses.',
      cpuOptions: [
        {
          title: 'Regular Intel',
          diskType: 'SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          networkType: 'Up to 2 Gbps',
          networkToolTipMessage: 'Network throughput is the maximum amount of data this instance can transfer per second at any given time.',
          plans: [
            {
              "pricePerMonthINR": 10786,
              "pricePerHourINR": 16.73,
              "ramCpu": "16 GB / 2 CPUs",
              "storage": "300 GB NVMe SSDs",
              "transfer": "4 TB transfer"
            },
            {
              "pricePerMonthINR": 21573,
              "pricePerHourINR": 33.47,
              "ramCpu": "32 GB / 4 CPUs",
              "storage": "600 GB NVMe SSDs",
              "transfer": "6 TB transfer"
            },
            {
              "pricePerMonthINR": 43145,
              "pricePerHourINR": 66.95,
              "ramCpu": "64 GB / 8 CPUs",
              "storage": "1.17 TB NVMe SSDs",
              "transfer": "7 TB transfer"
            },
            {
              "pricePerMonthINR": 86291,
              "pricePerHourINR": 133.89,
              "ramCpu": "128 GB / 16 CPUs",
              "storage": "2.34 TB NVMe SSDs",
              "transfer": "8 TB transfer"
            },
            {
              "pricePerMonthINR": 129436,
              "pricePerHourINR": 198.34,
              "ramCpu": "192 GB / 24 CPUs",
              "storage": "3.52 TB NVMe SSDs",
              "transfer": "9 TB transfer"
            },
            {
              "pricePerMonthINR": 172173,
              "pricePerHourINR": 263.36,
              "ramCpu": "256 GB / 32 CPUs",
              "storage": "4.69 TB NVMe SSDs",
              "transfer": "10 TB transfer"
            }
          ]

        },
        {
          title: 'Premium Intel',
          diskType: 'NVMe SSD',
          diskToolTipMessage: 'NVMe SSD has substantial improvements to read and write speeds compared to SSD',
          isNew: true,
          networkType: 'Up to 10 Gbps',
          networkToolTipMessage: 'Network throughput is the maximum amount of data this instance can transfer per second at any given time.',
          plans: [
            {
              "pricePerMonthINR": 10786,
              "pricePerHourINR": 16.73,
              "ramCpu": "16 GB / 2 CPUs",
              "storage": "300 GB NVMe SSDs",
              "transfer": "4 TB transfer"
            },
            {
              "pricePerMonthINR": 21573,
              "pricePerHourINR": 33.47,
              "ramCpu": "32 GB / 4 CPUs",
              "storage": "600 GB NVMe SSDs",
              "transfer": "6 TB transfer"
            },
            {
              "pricePerMonthINR": 43145,
              "pricePerHourINR": 66.95,
              "ramCpu": "64 GB / 8 CPUs",
              "storage": "1.17 TB NVMe SSDs",
              "transfer": "7 TB transfer"
            },
            {
              "pricePerMonthINR": 86291,
              "pricePerHourINR": 133.89,
              "ramCpu": "128 GB / 16 CPUs",
              "storage": "2.34 TB NVMe SSDs",
              "transfer": "8 TB transfer"
            },
            {
              "pricePerMonthINR": 129436,
              "pricePerHourINR": 198.34,
              "ramCpu": "192 GB / 24 CPUs",
              "storage": "3.52 TB NVMe SSDs",
              "transfer": "9 TB transfer"
            },
            {
              "pricePerMonthINR": 172173,
              "pricePerHourINR": 263.36,
              "ramCpu": "256 GB / 32 CPUs",
              "storage": "4.69 TB NVMe SSDs",
              "transfer": "10 TB transfer"
            }
          ]

        },
      ]
    },
  ]

  authenticationMethod = [{
    title: 'SSH Key',
    description: 'Connect to your Droplet with an SSH key pair'
  }, {
    title: 'Password',
    description: 'Connect to your Droplet as the “root” user via password'
  }]

  cloudInstanceForm = new FormGroup({
    region: new FormControl('Bangalore'),
    dataCenter: new FormControl(),
    os: new FormControl('Window'),
    osVersion: new FormControl(''),
    instanceType: new FormControl('Basic'),
    cpuType: new FormControl(''),
    plan: new FormControl(),
    quantity: new FormControl(1),
    hostName: new FormControl('')
  })

  constructor() { }
  ngOnInit(): void {
    this.defaultDataCenterRegion = this.dataCentersRegion.flatMap((dataCenter: any) => {
      return dataCenter.locations.filter((location: any) => {
        return location.region === 'Bangalore';
      });
    })[0];

    this.defaultOS = this.operatingSystems[0]
    this.defaultInstance = this.instanceTypes[0]
    this.defaultAuthMethod = this.authenticationMethod[0]
    this.changeCPUOption(this.defaultInstance.cpuOptions[0])
    this.changeDataCenter(this.defaultDataCenterRegion.dataCenters[0])
    this.changeVersion(this.defaultOS.versions[0])

    this.cloudInstanceForm.controls.region.valueChanges.subscribe((value: any) => {
      this.changeRegion(value)
    })
    this.cloudInstanceForm.controls.os.valueChanges.subscribe((value: any) => {
      this.changeOS(value)
    })
    this.cloudInstanceForm.controls.instanceType.valueChanges.subscribe((value: any) => {
      this.changeInstance(value)
    })
    this.cloudInstanceForm.controls.plan.valueChanges.subscribe((value: any) => {
      this.changePlan(value)
    })
    this.cloudInstanceForm.controls.cpuType.valueChanges.subscribe((value: any) => {
      this.changeCPUOption(value)
    })

  }

  changeRegion(region: any) {

    this.defaultDataCenterRegion = this.dataCentersRegion.flatMap((dataCenter: any) => {
      return dataCenter.locations.filter((location: any) => {
        return location.region === region;
      });
    })[0];
    console.log(this.defaultDataCenterRegion)
    this.changeDataCenter(this.defaultDataCenterRegion.dataCenters[0])
  }

  changeDataCenter(datacenter: any) {
    console.log(datacenter)
    this.selectedDataCenter = ''
    setTimeout(() => {
      this.selectedDataCenter = datacenter
      this.cloudInstanceForm.patchValue({ dataCenter: this.selectedDataCenter })
    }, 1000)
  }

  changeOS(os: any) {
    this.defaultOS = this.operatingSystems.find((ops: any) => ops.title == os)
    this.changeVersion(this.defaultOS.versions[0])
  }

  changeVersion(version: any) {
    this.selectedVersion = version;
    this.cloudInstanceForm.patchValue({ osVersion: this.selectedVersion })
  }

  changeInstance(instance: any) {
    this.defaultInstance = this.instanceTypes.find((data: any) => data.title == instance);
    this.changeCPUOption(this.defaultInstance.cpuOptions[0])
  }

  changeCPUOption(cpuOption: any) {
    this.defaultCPU = cpuOption
    this.cloudInstanceForm.patchValue({ cpuType: this.defaultCPU } , {emitEvent:false})
  }

  changePlan(plan: any) {
    this.selectedPlan = plan
    this.pricePermonth = plan?.pricePerMonthINR;
    this.pricePerHour = plan?.pricePerHourINR
  }

  changeAuthMethod(method: any) {
    console.log(method)
    this.defaultAuthMethod = method;
  }

  getRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  addOrRemoveMachine(isIncrease: any) {
    if (isIncrease && this.sameConfigurationMachines < 10) {
      this.sameConfigurationMachines += 1;
      this.pricePermonth += this.selectedPlan?.pricePerMonthINR || 0;
      this.pricePerHour += this.selectedPlan?.pricePerHourINR || 0;
    }
    else if (!isIncrease) {
      if (this.sameConfigurationMachines >= 2) {
        this.sameConfigurationMachines -= 1;
        this.pricePermonth -= this.selectedPlan?.pricePerMonthINR || 0;
        this.pricePerHour -= this.selectedPlan?.pricePerHourINR || 0;
      }
    }
    this.cloudInstanceForm.patchValue({ quantity: this.sameConfigurationMachines })
  }

  showPassword() {
    this.isShowPassword = !this.isShowPassword;
    (document.getElementById('root-password') as HTMLInputElement).type = this.isShowPassword ? 'text' : 'password';
  }

  onSubmit() {
    console.log(this.cloudInstanceForm.value)
  }


}
