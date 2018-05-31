function process(){
  var string=document.getElementById("texto").value;
  var offset= parseInt(document.getElementById("displace").value);
  document.getElementById("result").value = cipher.encode(string,offset);
}
function process2(){
  var string=document.getElementById("texto").value;
  var offset= parseInt(document.getElementById("displace").value);
  document.getElementById("xx").value = cipher.decode(string,offset);
}