var contentParent=document.querySelectorAll(".contentText")[0]
var text=contentParent.textContent
console.log(text)
contentParent.textContent=""
index=0
setInterval(()=>{
contentParent.textContent+=text.charAt(index)
index+=1
},100)
