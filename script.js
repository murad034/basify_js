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
});

function dbClick(){
    alert("ok");
}

const username = document.querySelector("#username");
const errorPara = document.querySelector("#errorPara");
errorPara.style.color = "red";
// username.addEventListener("input", function(){
username.addEventListener("keyup", function(){
    if(this.value.length <= 3){
        errorPara.textContent = "Input must be 3 length characters";
        return false;
    }
    errorPara.textContent = "";
    return true;
});


// form submit

const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const formError = document.querySelector("#formError");

function validate(){
    if(fullname.value == "" || email.value == "" || password.value == ""){
        fullname.placeholder = "Fullname is required";
        email.placeholder = "Email is required";
        password.placeholder = "Password is required";
    }

    if(fullname.value == ""){
        //formError.textContent = "Fullname is required";
        fullname.placeholder = "Fullname is required";
        return false;
    }

    if(email.value == ""){
        formError.innerText = "Email is required";
        return false;
    }

    if(password.value == ""){
        formError.innerHTML = "Password is required";
        return false;
    }

    alert("your form has been submitted. Thank You");
        
}