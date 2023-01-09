

function addToList(event) {
    let input=document.getElementById("data").value;
    let ul=document.getElementById("myList");

    let newLi = document.createElement("li");
    newLi.textContent=input;
    ul.append(newLi);
    
    newLi.className="newentry";

    newLi.addEventListener( 'click', function() {
        this.className="clicked";
    
    });
    newLi.addEventListener( 'click', function() {
        setTimeout(function() {
            newLi.remove();
        },1000);
        
    });
};
    

let enterbutton=document.getElementById("data");

enterbutton.addEventListener("keypress", function(event) {
    if (event.key==="Enter") {
        document.getElementById("button").click();
    }
});

let button=document.getElementById("button");

button.addEventListener("click", addToList);

function ClearInput() {
    let getValue=document.getElementById("data");
    if(getValue.value !="") {
        getValue.value ="";
    }
};
button.addEventListener("click",ClearInput);





    


