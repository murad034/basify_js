let button = document.querySelector("#btn1");
let para1 = document.querySelector("#para1");

button.addEventListener('click', function(){
    //alert("button is working");
    para1.textContent = "Button is clicked";
    //para1.style.color = "red";
    //para1.style.backgroundColor="green";
    
    //para1.classList.add("p-color");
    para1.setAttribute("class", "p-color");
    para1.setAttribute("href", "google.com");
    let href = para1.getAttribute("href");
    let ip = para1.getAttribute("ip");
    console.log(href, ip);
});