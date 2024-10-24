var response=document.getElementsByClassName("response")[0]
var showButton=document.getElementsByClassName("showButton")[0]
var hideButton=document.getElementsByClassName("hideButton")[0]

showButton.addEventListener("click",()=>{
  
    response.classList.remove("hide")
    showButton.classList.add("hide")
    hideButton.classList.remove("hide")  
    var content=response.textContent;
    response.textContent=""
    var i=0
    const intervalWriting=setInterval(()=>{
        response.textContent+=content[i]
        i+=1
        if(i==content.length)
        {
            clearInterval(intervalWriting)
        }
    },5)
})
hideButton.addEventListener("click", () => {
    var content = response.textContent; // Get the current content
    var i = content.length; // Start from the end of the content

    const intervalWriting = setInterval(() => {
        // Display the text up to the current index (i)
        response.textContent = content.substring(0, i); 
        i -= 1; // Decrease the index

        // Stop the interval when no characters are left
        if (i < 0) {
            clearInterval(intervalWriting);
            response.classList.add("hide"); // Optionally hide the response after clearing
            hideButton.classList.add("hide"); // Hide the hide button
            showButton.classList.remove("hide"); // Show the show button
        }
    }, 5); // Adjust speed as needed (currently set to 50 ms)
});
