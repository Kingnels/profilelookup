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

var data = lookUpProfile("Akira","likes")

console.log(data)

var bar = [4,6,7,3,2]
var total = 0

for (i = 0; i < bar.length;i++){
    total = total + bar[i]
}
console.log(total)

var product = 1
function multiply(arr){
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j] 
        }
    }
    return  product 
}

var holme = multiply([[2,4],[1,4],[5,4],[6,4],[8,4]])
console.log(holme)