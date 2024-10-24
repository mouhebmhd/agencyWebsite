var nextButton=document.getElementsByClassName("nextButton")[0];
var previousButton=document.getElementsByClassName("previousButton")[0];
/*
first index= 1 
card 1 show
card 2 show
card 3 show
card 4 hide
card 5 hide
card 6 hide
### when clicking on next 
card 1 hide
card 2 show
card 3 show
card 4 show
card 5 hide
card 6 hide
### when clicking on next 
card 1 hide
card 2 hide
card 3 show
card 4 show
card 5 show
card 6 hide
### when clicking on next 
card 1 hide
card 2 hide
card 3 hide
card 4 show
card 5 show
card 6 show

indexActuel=1
  1    2     3           
(show,show,show,hide,hide,hide)

indexActuel=2
       2     3    4        
(hide,show,show,show,hide,hide)

0 1 2 #3 #4 #5 actualIndex=3     lastIndex=5
#0 1 2 3 #4 #5 actualIndex=4     lastIndex=5
#0 #1 2 3  4 #5 actualIndex=5     lastIndex=5



*/
var cards=document.getElementsByClassName("card")
function getIndex(cardsList)
{
    let index=0;
    let found=false;
    while((found==false )&& (index<cardsList.length))
    {
        if(cardsList[index].classList.contains("hiddenCard")==false)
        {
            found=true;
        }
        else 
        {
            index+=1
        }
    }
    return index

}
function getLastIndex(cardsList)
{
    let index=cardsList.length;
    let found=false;
    while((found==false )&& (index<cardsList.length))
    {
        if(cardsList[index].classList.contains("hiddenCard")==false)
        {
            found=true;
        }
        else 
        {
            index-=1
        }
    }
    return index

}
nextButton.addEventListener("click",()=>{
    var actualIndex=getIndex(cards)
    actualIndex+=1 ;
    var index1=actualIndex;
    var index2=(actualIndex+1)%6
    var index3=(actualIndex+2)%6
    for(let i=0;i<cards.length;i++)
    {
        // show element actualIndex
        // show element actualIndex+1
        // show element actualIndex+2
        if((i==index1 )|| (i==index2) || (i==index3 ))
        {
            cards[i].classList.remove("hiddenCard")
        }
        else 
        {
            cards[i].classList.add("hiddenCard")
        }
     
    }
})
previousButton.addEventListener("click",()=>{
    var actualIndex=getLastIndex(cards);
    actualIndex-=1;
    var index1=Math.abs(actualIndex);
    var index2=Math.abs((actualIndex-1)%6)
    var index3=Math.abs((actualIndex-2)%6)

  for(let i=0;i<cards.length;i++)
        {
            // show element actualIndex
            // show element actualIndex+1
            // show element actualIndex+2
            if((i==index1 )|| (i==index2) || (i==index3 ))
            {
                cards[i].classList.remove("hiddenCard")
            }
            else 
            {
                cards[i].classList.add("hiddenCard")
            }
         
        } 
})
