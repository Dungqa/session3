var x = null;
x = document.getElementById('myImage');
window.onload =init;
function init(){
    x =document.getElementById("nutno");
    x.style.position= 'relative';
    x.style.left = '0px';
    x.style.top = '0px';
}

function chay() {
    var z=Math.floor((Math.random() * window.innerHeight) + 0);;
    var y=Math.floor((Math.random() * window.window.innerWidth) + 0);
    console.log(z);
    x.style.left= y + 'px';
    x.style.top= z + 'px';
}
