

function addToList(event) {
    let listItemInput=document.getElementById("data").value;
    let listElement=document.getElementById("myList");

    let newListEntry = document.createElement("li");
    newListEntry.textContent=listItemInput + " (" + new Date().toLocaleString() + ")";
    listElement.append(newListEntry);

    newListEntry.className="cursor-pointer";

    newListEntry.addEventListener( 'click', function() {
        setTimeout(function() {
            newListEntry.remove();
        },0);

    });

    clearInput();
}


let enterButton=document.getElementById("data");

enterButton.addEventListener("keypress", function(event) {
    if (event.key==="Enter") {
        document.getElementById("button").click();
    }
});

let button=document.getElementById("button");

button.addEventListener("click", addToList);

let clearButton=document.getElementById("clearButton");

function clearInput() {
    let getValue=document.getElementById("data");
    if(getValue.value !=="") {
        getValue.value ="";
    }
}
clearButton.addEventListener("click", clearInput);





    


