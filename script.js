const p = document.querySelector("#para1");

function clickBtn(){
    p.append(" hello append");
    p.prepend("hi prepend ");
    p.before("hee before ");
    p.after("hlw after ");
}