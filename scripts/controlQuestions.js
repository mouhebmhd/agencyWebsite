var showButtons=document.getElementsByClassName("showRespButton");
var hideButtons=document.getElementsByClassName("hideRespButton");


for(var i=0;i<showButtons.length;i++)
{
    showButtons[i].addEventListener("click",(event)=>{
        // target : l'element qui a subit l'evenement click
        var target=event.target;
        // parent Node : attribut qui permet de retourner le parent d'un element HTML 
        var plusButton=target.parentNode;
        // nextSibling : permet de trouver le frere suivant (meme s'il est un texte)
        // nextElementSibling : permet de trouver le frere suivant (qui doit etre un element HTML )
        var minusButton=plusButton.nextElementSibling;
        plusButton.classList.add("hiddenIcon")
        minusButton.classList.remove("hiddenIcon")
        var buttonParent=plusButton.parentNode
        var response=buttonParent.nextElementSibling
        response.classList.remove("hiddenResponse")
    })

}

for(var i=0;i<hideButtons.length;i++)
    {
        hideButtons[i].addEventListener("click",(event)=>{
            // target : l'element qui a subit l'evenement click
            var target=event.target;
            // parent Node : attribut qui permet de retourner le parent d'un element HTML 
            var minusButton=target.parentNode;
            // previousSibling : permet de trouver le frere précédent (meme s'il est un texte)
            // previousElementSibling : permet de trouver le frere précédent (qui doit etre un element HTML )
            var plusButton=minusButton.previousElementSibling;
            plusButton.classList.remove("hiddenIcon")
            minusButton.classList.add("hiddenIcon")
            var parentButton=button.parentNode;
            var response=parentButton.nextElementSibling
            response.classList.add("hiddenResponse")
        })
    
    }