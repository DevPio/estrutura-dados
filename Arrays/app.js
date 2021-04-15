let daysOfWeek = new Array();

daysOfWeek = new Array(7);

daysOfWeek = new Array('Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday')

daysOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

console.log(daysOfWeek.length)

for (let index = 0; index < daysOfWeek.length; index++) {
    console.log(daysOfWeek[index])
    
}

const fibonacci = [];
fibonacci[1] = 1
fibonacci[2] = 1

for(let fiboI = 3; fiboI < 20; fiboI++){

    fibonacci[fiboI] =  fibonacci[fiboI - 1] + fibonacci[fiboI - 2];  
    console.log(fibonacci[fiboI])
                        
}


let numbers = [1,2,3,4,5,6,7,8,9]

Array.prototype.firtItem = function(value) { 

    for (let i = this.length; i >= 0;i--){
        this[i] = this[i - 1]
    }

    this[0] = value
    return this;

 }


 Array.prototype.endItem = function(value){
    this[this.length + 1] = value;

    return this;
 }

 Array.prototype.myPop = function(){

    let a = [];
     if(this.length == 0){
         return []
     }

     for (let index = 0; index < this.length - 1; index++) {
         a[index] = this[index]
         
     }

     

     return a
 }

Array.prototype.removeFirst = function(){

    for (let index = 1; index < this.length; index++) {
        
        this[index - 1] = this[index]
       
    }
    this.pop()

    return this
}



Array.prototype.targetPosition = function(position){

    let newArray = []

    for (let index = 0; index < this.length; index++) {
        
        if(index !== position){
            newArray.push(this[index])
        }
        
    }


    return newArray
}


let number = [1,2,3,4,5,6];

console.log(number.splice(0,3))
console.log(number)
number.splice(0,0,1,2,3)
console.log(number)


let averageTempDAY1 = [24,28,37,50,21]
let averageTempDAY2 = [23,50,80,1,30]


let totalDay = [];

totalDay[0] = averageTempDAY1;
totalDay[1] = averageTempDAY2;

console.log(totalDay)
