# inverterEstimatorScript
A simple script written in TypeScript, to estimate the size of the inverter and also your battery backup time. 
To use the script all you need to do is the following:
1) Update the electricalDevicesIHave array to include any devices you wish to connect to your inverter;
2) Update esti to create a new Estimator object with your given details, the constructor will look like the following:
                                      constructor Estimator(
                                            electricalDevices: Array<ElectricalDevice>,  
                                            powerFactor: number,  
                                            batteryAH: number,  
                                            batteryVoltage: number,  
                                            numberOfBatteries: number);  
3) Navigate into the directory
4) compile the typeScript code using: tsc estimator.ts
5) run the compiled JavaScript code using: node estimator.js 
