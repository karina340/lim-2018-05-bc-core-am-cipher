function process(){
    var string=document.getElementById("texto").value;
    var offset= parseInt(document.getElementById("displace").value);
    document.getElementById("result").value = cipher.encode(offset,string);
}
/*function process2(){
    var string=document.getElementById("texto").value;
    var offset= parseInt(document.getElementById("displace").value);
    document.getElementById("result").value = cipher.decode(offset,string);
}*/
function process2(){
    var string=document.getElementById("result").value;
    var offset= parseInt(document.getElementById("displace").value);
    document.getElementById("xx").value = cipher.decode(offset,string);
}