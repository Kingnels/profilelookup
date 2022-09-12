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

    for (var i = 0; i < contact.length; i++){
    
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