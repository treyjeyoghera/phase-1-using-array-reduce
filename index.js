const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce((a,b) => a+b)
console.log(totalBatteries);