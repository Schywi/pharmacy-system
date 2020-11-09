//database
var database = [ 
    { 
        username: "Kayle",
        password:"Uzak1",
    },
    { 
        username: "Diana",
        password:"123"
    },
    { 
        username: "Poppy",
        password:"U777"
    }
]
 
var singUp = document.getElementById("singUp");
var enter = document.getElementById("singIn");

// validar a nome e  senha do usuario 

function isUserValid(username,password) { 
    for(i = 0; i < database.length;i++) { 
        if(username === database[i].username && password === database[i].password) { 
            return true;
    }
 } 
 return false;
}

function signIn(username,password) {
    if(isUserValid(username,password)) { 
        
        alert("You are log in ")
    } else { 
        alert("Sorry , but the username or email is wrong.")
    }
 }

function signUp(username,password){ 
    var user = { 
        username,
        password,
    }

    database.push(user);
}

// For Sign In 
 enter.addEventListener("click", function(){
     var userInput = prompt("Enter with your username")
    var passwordInput = prompt("Enter with your password:")
    signIn(userInput,passwordInput)
 })

 // for signUp
 singUp.addEventListener("click", function() { 
     var userInput = prompt("Choose your username")
     var passwordInput = prompt("Choose your password:")

    signUp(userInput,passwordInput)
 })