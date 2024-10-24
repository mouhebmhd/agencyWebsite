var emptyStars=document.querySelectorAll(".emptyStar");
var fullStars=document.querySelectorAll(".fullStar");
console.log(emptyStars);
console.log(fullStars)
var starNumbers=document.getElementsByClassName("starNumbers")[0]
for(let i=0;i<emptyStars.length;i++)
{
    emptyStars[i].addEventListener("click",(event)=>{
        var currentStar=event.target;
        var nextStar=currentStar.nextElementSibling
        currentStar.classList.add("hiddenStar")
        nextStar.classList.remove("hiddenStar")
        starNumbers.textContent=(parseInt(starNumbers.textContent))+1
        })
    
}

for(let i=0;i<fullStars.length;i++)
{
    fullStars[i].addEventListener("click",(event)=>{
        var currentStar=event.target;
        var previousStar=currentStar.previousElementSibling;
        currentStar.classList.add("hiddenStar")
        previousStar.classList.remove("hiddenStar")
        starNumbers.textContent=(parseInt(starNumbers.textContent))-1
    })
}