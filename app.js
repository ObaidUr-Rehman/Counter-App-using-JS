var count=0;

var getdiv=document.getElementById("number");
getdiv.innerHTML=count;

var increase = () => {
    count++;
    getdiv.innerHTML=count;
}

var decrease = () => {
    count--;
    getdiv.innerHTML=count;
}
    
var reset = () => {
    count=0;
    getdiv.innerHTML=count;
}