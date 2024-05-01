"use strict";

// http://www.w3schools.com/TAGS/ref_eventattributes.asp 

let element = document.getElementById("testparagraph")
//console.log(element)


/*
element.onclick = function()
{
    alert ("I have been clicked upon")
}


element.onclick = function()
{
    alert ("Second event handler")
}



element.addEventListener("click", function()
{
    alert ("I have been clicked upon")
})

element.addEventListener("click", function()
{
    alert ("Second event handler")
})
*/


function firstHandler()
{
    alert ("I have been clicked upon")
}

function secondHandler()
{
    alert ("Second event handler")
}

element.addEventListener("mouseover", mouseOverHandler)

function mouseOverHandler()
{
    alert ("The mouse is over the paragraph")
}

//element.addEventListener("click", firstHandler)





/*
element.addEventListener("mouseover", function(){

    alert("Mouseover")
})


element.addEventListener("click", firstHandler)
element.addEventListener("click", secondHandler)


function firstHandler()
{
    alert ("I have been clicked upon")
}

function secondHandler()
{
    alert ("I am the second handler")
}

*/