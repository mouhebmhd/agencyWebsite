var elements=document.getElementsByClassName("growthValue");
for(let i=0;i<elements.length;i++)
{
    var elementValue=elements[i].textContent.substring(0,elements[i].textContent.length-1)
    elementValue=parseFloat(elementValue);
    if(elementValue>=0)
    {
        elements[i].style.backgroundColor="#B9E8BC";
        elements[i].style.color="#3B773B";
    }
    else 
    {
        elements[i].style.backgroundColor="#FCCAC8";
        elements[i].style.color="#B33E44";
    }
}
