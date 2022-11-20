# inverterEstimatorScript
A simple script written in TypeScript, to estimate the size of the inverter and also your battery backup time. 
To use the script all you need to do is the following:
1) Update the electricalDevicesIHave array to include any devices you wish to connect to your inverter;
2) Update esti to create a new Estimator object with your given details, the constructor will look like the following:  
                                      constructor Estimator(  
                                              &nbsp;&nbsp;&nbsp;&nbsp;electricalDevices: Array<ElectricalDevice>,  
                                              &nbsp;&nbsp;&nbsp;&nbsp;powerFactor: number,  
                                              &nbsp;&nbsp;&nbsp;&nbsp;batteryAH: number,  
                                              &nbsp;&nbsp;&nbsp;&nbsp;batteryVoltage: number,  
                                              &nbsp;&nbsp;&nbsp;&nbsp;numberOfBatteries: number);  
3) Navigate into the directory
4) compile the typeScript code using: tsc estimator.ts
5) run the compiled JavaScript code using: node estimator.js 

Disclaimer:
I do not claim any rights to the formula used in this script. I found a website that gives a very good explanation on how to caluculate your required inverter size and decided to make a script using their formula, becuase if I wrote these details on a piece of paper I'd probably lose it. A big thank you to the owners of this website https://www.electricalengineeringtoolbox.com/2017/07/how-to-calculate-inverter-power-rating.html   
