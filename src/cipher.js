window.cipher = {
  // ... 
};
function encriptar(text,displace){

  text=text.toUpperCase();

  var array = text.split('');
  var encrypted ="";		
  
  array.forEach(function(element) {
    encrypted+=modular(element,displace);
  });
  return encrypted;
}

function modular(letter, displace){
  let index = letter.charCodeAt();		
  let nextIndex = (index-65+displace)%26+65;
  return String.fromCharCode(nextIndex);
}
