const clickBtn = document.getElementById("clickBtn");
const para = document.querySelectorAll("p");

clickBtn.addEventListener("click", function(){
    for(let i=0; i< para.length; i++){
        para[i].textContent = "New Updated Text "+ (i+1);
        para[i].style.color = "red";
    }
});

const iconimg = document.querySelector("#iconimg");
const mp = document.querySelector("#mp");

iconimg.addEventListener("mouseover", function(){
    //alert("click");
    mp.textContent= "hey man";
});

iconimg.addEventListener("mouseout", function(){
    mp.textContent = "";
})