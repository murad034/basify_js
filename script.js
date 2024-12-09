const p = document.querySelector("#para1");

function clickBtn(){
    p.append(" hello append");
    p.prepend("hi prepend ");
    p.before("hee before ");
    p.after("hlw after ");
}

const hbtn = document.querySelector("#hbtn");
hbtn.addEventListener("click", function(){
    const heading = document.querySelectorAll("h3");

    for(let i=0; i<heading.length; i++){
        heading[i].textContent = "New content: " + i;
        //console.log(heading[i]);
    }
});

function clickAll(){
    const heading = document.querySelectorAll("h3");
    console.log('dsdsds');
    for(let i=0; i<heading.length; i++){
        heading[i].textContent = "New content: " + i;
        //console.log(heading[i]);
    }
}

//console.log(heading);

// heading.addEventListener("click", function(){
//     alert("heading clicked");
// })

const addItemToList = document.querySelector("#addItemToList");
const removeItemToList = document.querySelector("#removeItemToList");

const myList = document.querySelector("#list");

addItemToList.addEventListener("click", function(){
    const node = document.createElement("li");
    const text = document.createTextNode("New fruits");
    node.appendChild(text);
    
    myList.prepend(node);
})

removeItemToList.addEventListener("click", function(){
    //const removeItem = myList.lastChild;
    const removeItem = myList.children[1];
    // const removeItem = myList.lastElementChild;
    myList.removeChild(removeItem);
})