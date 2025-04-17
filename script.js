var listNumber=[17,10,60,50,90,80]
var Buttondiv=document.getElementById("name")
var currentSelectedIndex = -1

function displayItems(){
    currentSelectedIndex=-1;
    var htmlString ="";
    for(let i=0;i<listNumber.length;i++){
        htmlString +="<div onClick='Click("+i+")' class='round'>"+listNumber[i]+"</div>"
    }
    Buttondiv.innerHTML = htmlString;
    document.getElementById("input").value = ""
}
// Add this number of element
function addNumber(){
    const inputValue=Number(document.getElementById("input").value)
    listNumber.push(inputValue)
    displayItems()
}
// Color change And Iuput of show this element
function Click(indexPosition){
    displayItems()
    let color = document.getElementsByClassName("round")
    document.getElementById("input").value=listNumber[indexPosition]
    color[indexPosition].style.backgroundColor="green";
    currentSelectedIndex = indexPosition
}
// Delete this of element
 
function deleteNumber(){
    if(currentSelectedIndex>-1){
        listNumber.splice(currentSelectedIndex,1)
        displayItems()
    }
    
    }

// Upload this of element

function updateNumber() {
    const updateValue = Number(document.getElementById("input").value);
    listNumber[currentSelectedIndex] = updateValue;
    displayItems();
}
  


displayItems();



