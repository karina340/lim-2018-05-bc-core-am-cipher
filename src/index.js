function process(){
    var texto=document.getElementById("texto").value;
    var displace= parseInt(document.getElementById("displace").value);
    document.getElementById("result").value = encriptar(texto,displace);
}