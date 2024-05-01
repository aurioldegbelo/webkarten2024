"use strict";


let element = document.getElementById("testparagraph")

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
