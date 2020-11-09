

var  button = document.getElementById("enter")
var darkmode = document.getElementById("darkmode")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

 
function inputLength() { 
    return input.value.length
}

function imgDark(test) { 
    var img = document.createElement("img")
    img.setAttribute("src","trash.svg");
    
     return img;
}


// Button Darkmode
function buttonDarkMode() { 
    var body = document.querySelector("body");
    var imgD = document.getElementsByTagName("img")[0];
    var test = body.classList.toggle("darkmode");
    var svg = document.querySelector("svg");
    svg.classList.toggle("light");
    
  
        if ( test  === true) { 
           
           imgD.setAttribute("src","trash_white.svg");
           
        }else { 
            
            imgD.setAttribute("src","trash.svg");
        }; 
    return test;
    
   }
// Create the List Button
function createListButton(li) { 
    var liButton = document.createElement("button")
    var img = imgDark();
    liButton.appendChild(img);
    li.appendChild(liButton);
  
    
    // Delete the button
    liButton.addEventListener("click",  function() { 
        console.log("Eu")
        li.remove();
    })
} 


//Create ListElement
function createListElement(){
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ""
    
    createListButton(li)

    li.addEventListener("click", function() {
        li.classList.toggle("done");
    })
}

//Add List after Click
function addListAfterClick() { 
    if( inputLength() > 0 ) { 
      createListElement()
    } 
}


// Add List after key press
function addListAfterKeypress(event){
        if(inputLength() > 0  && event.keyCode === 13) { 
            createListElement()
        }
}

button.addEventListener("click", addListAfterClick)

darkmode.addEventListener("click", buttonDarkMode)
input.addEventListener("keypress", addListAfterKeypress)
