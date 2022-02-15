function number(n) {
    var n1 = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = n1 + n;
}
function clean(){
    document.getElementById("result").innerHTML = "";
}


function back(){
    var backWord = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=backWord.substring(0, backWord.length -1);
}
 
function calc(){
    var res = document.getElementById("result").innerHTML;

    if(res){
        document.getElementById("result").innerHTML = eval(res);
    }else{
        document.getElementById("result").innerHTML = `ERROR`
    }
}