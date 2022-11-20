interface ElectricalDevice {
    deviceName: string;
    wattage: number;
    quantity: number;
}

const electricalDevicesIHave: Array<ElectricalDevice> = [
    {
        deviceName: 'Total lighting',
        wattage: 300,
        quantity: 1
    },
    {
        deviceName: 'Standing fans',
        wattage: 70,
        quantity: 3
    },
    {
        deviceName: 'LCD TV',
        wattage: 100,
        quantity: 2
    },
    {
        deviceName: 'Home theatre',
        wattage: 200,
        quantity: 1,
    },
    {
        deviceName: 'Juice extractor',
        wattage: 150,
        quantity: 1,
    },
];

class Estimator {    
    electricalDevices: Array<ElectricalDevice>;
    powerFactor: number = 0.8;
    totalLoadInWatts: number;
    totalLoadInKiloWatts: number;
    powerInKVA: number;

    batteryAmpHours: number;
    batteryVoltage: number;
    numberOfBatteries: number;
    batteryBackupTime: number;

    constructor(
        electricalDevices: Array<ElectricalDevice>,
        powerFactor: number,
        batteryAH: number,
        batteryVoltage: number,
        numberOfBatteries: number) {
        this.electricalDevices = electricalDevices;
        this.powerFactor = powerFactor;
        this.batteryAmpHours = batteryAH;
        this.batteryVoltage = batteryVoltage;
        this.numberOfBatteries = numberOfBatteries;
    }

    calculateTotalLoadInWatts(electricalDevices: Array<ElectricalDevice>): number {
        let totalWattage: number = 0;
        electricalDevices
            .map((device: ElectricalDevice) => {        
                totalWattage += device.wattage * device.quantity;
            });
            return totalWattage;
    }

    calculateTotalLoadInKiloWatts(totalLoadInWatts: number): number {
        return totalLoadInWatts / 1000;
    }

    calculatePowerInKVA(): void {
        this.powerInKVA = this.totalLoadInKiloWatts / this.powerFactor;
    }

    calculateBatteryBackupTime() {
        this.batteryBackupTime = (this.batteryAmpHours * this.batteryVoltage * this.numberOfBatteries) / this.totalLoadInWatts;
    }

    estimatePowerRequirements() {
        this.totalLoadInWatts = this.calculateTotalLoadInWatts(this.electricalDevices);
        this.totalLoadInKiloWatts = this.calculateTotalLoadInKiloWatts(this.totalLoadInWatts);
        this.calculatePowerInKVA();
        this.calculateBatteryBackupTime();
    }

    

    displayEstimates(): void {
        console.log("Displaying inverter size estimates based on the following information:\n");

        console.log("Devices that will be connncted to the inverter:");        
        this.electricalDevices.forEach((device: ElectricalDevice) => {
           console.log(device);
        });

        console.log("Power Factor: ", this.powerFactor);        
        console.log("Total Wattage: ", this.totalLoadInWatts);        
        console.log("Total KiloWatts: ", this.totalLoadInKiloWatts); 
        console.log("--------------------------------------------------------------------------");
        console.log("Estimated required inverter size (KVA): ", this.powerInKVA);
        console.log("Estimated battery backup time: ", this.batteryBackupTime);
              
    }
}

const esti = new Estimator(electricalDevicesIHave, 0.8, 200, 12, 2);
esti.estimatePowerRequirements();
esti.displayEstimates();