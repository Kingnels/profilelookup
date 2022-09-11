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
    "firstName": "Kristin",
    "lastName": "Charmes",

    "number": "09107878682",
    "likes": ["Javascript","Gaming"] 
}
]

function lookUpProfile (name, property){

    for (var i = 0; i < contact.length; item++){
    
        if(contact[i].firstName == name){
            return contact[i][property] || "no such property"
        }
    }
    return "no such contact"
}

var data = lookUpProfile("Akira","number")

console.log(data)
