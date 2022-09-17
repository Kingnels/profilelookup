var contact = [
{
    "firstName": "Akira",
    "lastName": "Laina",
    "number": "09038382682",
    "likes": ["Coding","brownie Points"]
},

{
    "firstName": "Harry",
    "lastName": "Porter",
    "number": "09038900682",
    "likes": ["Magic","hagrid", "Hogwarts"]
},

{
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "Unknown",
    "likes": ["intriguing","Violin"] 
},

{
    "firstName": "kristin",
    "lastName": "Charmes",
 
    "number": "09107878682",
    "likes": ["Javascript","Gaming"] 
}
]

function lookUpProfile (name, property){

    for (let i = 0; i < contact.length; i++){
    
        if(contact[i].firstName == name){
            return contact[i][property] || "no such property"
            // return contact[i][property]
        }
    }
    return "no such contact"
}

// var data = lookUpProfile("Akira","likes")

// console.log(data)

// var bar = [4,6,7,3,2]
// var total = 0

// for (i = 0; i < bar.length;i++){
//     total = total + bar[i]
// }
// console.log(total)
 

// var product = 1
// function multiply(arr){
//     for (var i = 0; i < arr.length; i++){
//         for (var j = 0; j < arr[i].length; j++){
//             product *= arr[i][j] 
//          }
//     }
//     return  product 
// }

// var holme = multiply([[5,4],[6,4],[8,4]])
// console.log(holme)

// var myarr=[]
// var i = 0

// while(i < 6){
//     myarr.push(i)
//     i++
// }

// console.log (myarr)


// var randomblw20 = Math.floor(Math.random() * 20)
// function randomNumber(){
//     return Math.random()
// }

// console.log(randomNumber())
// console.log(randomblw20)


// var randomblw20 = Math.floor(Math.random() * 20)
function randomNumber(min,max){
    // return Math.floor(Math.random()* (max-min + 1))+min
    return Math.floor(Math.random() * (max-min))+min
}

console.log(randomNumber(20,25))


// const avgTemp ={
//     "today": 78,
//     "tomorrow" : 50,
//     "next year": 340,
//     "next week": 67
// }

// function getTemp(args){
//     const {"tomorrow": nextyearTemp} = args;
//     return nextyearTemp
// }   

// console.log(getTemp(avgTemp))

// const forecast = {
//     "today": {min:78, max : 89},
//     "tomorrow": {min:48, max : 69},
// }
// function getForecast(args){
//     const {"tomorrow": {max : tmwMax}} = args;
//     return tmwMax
// }  

// console.log(getForecast(forecast))


function makeClass(){
    class thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp- 32); 
        }
        get temperature(){
            return this._temp
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp
        }
    }
    return thermostat;
}
  
const thermostat = makeClass();
const thermos = new thermostat(76 );
let temp = thermos.thermostat;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp)

// let jar = "solution"

// let  film = jar.charAt(3) 

// let time = jar.slice(2)

// console.log(film)
// console.log(time)


// var employee={
//     name:'nelson',
//     skill: "memory",
//     worth: "wealthy",
//     age: 25
// }

// var handler = { get (target, key){
//     return key in target ? target[key]: "Invalid input, please verify!"
//     }
// };
// var employee = new Proxy ({employee},handler)
//     employee.name='nelson',
//     employee.skill= "memory",
//     employee.worth= "wealthy",
//     employee.age= 25

//     // employee.status = "single"
    
// console.log(employee.worth, employee.name, employee.skill,employee.status)
// console.log(employee.growth)


// var handler = {
//     set: function (target, prop, value){
//         if (prop === "age"){
//             if(typeof value !== 'number' || Number.isNaN(value)){
//                 console.log("age must be a number")
//             }
//                 if(value < 0){
//                     console.log("age must be a positive number")
//                 }
//             } 
//             target[prop] = value;
             
//             return true;
//     }
// }
// var man = new Proxy ({man},handler)
//  man.age= "nelson"
//     man.age = -34
//     man.age = 74
 
//  console.log(man.age)

// var vosel = {
//     town: {
//     abuja: 190,
//     yola: 123,
//     lagos: 299 
//     },

//     shop:{
//         abuja: 50,
//         yola: 3,
//         lagos: 99 
//         }
// }

// var {town:{lagos:u}}=vosel
// console.log(u


// using the higher order function

// var terra = [2,8,12,22,32]
// var team = []

// function subnumb(array){
//     for(let i=0; i < array.length; i++){
//         console.log(array[i]-2)
//     }
// }
// team.push(...terra)

// console.log(team)

// Using the forEach higher function to do the same thing

// terra.forEach((element) => console.log(element - 2));

// const numbers = [1, 2, 3, 4, 5];
// function isOdd(array) {
// var oddArr = []
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       oddArr.push(array[i]);
//     }
//   }
//   return oddArr;
// }

// const oddArray = isOdd(numbers);
// console.log(oddArray);

// // Using the flitter higher function to do the same thing

// const oddnumb = numbers.filter((content) => content % 2 !==0);

// console.log(oddnumb)

// perfect

// we can use the reduce higher order funcition to sum the total elements in an aray


var terra = [2,8,12,22,32]

const total1 = terra.reduce((sum,element)=> sum+ element)

console.log(total1)

// done!