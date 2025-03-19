// correction task


function myTemperature(temp){
    return temp <= 15 ? "cold" :
    temp <= 30 ? "moderate" : "hot";
}
console.log(myTemperature(10));
console.log(myTemperature(22));
console.log(myTemperature(35));