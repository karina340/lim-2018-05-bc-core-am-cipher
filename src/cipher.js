window.cipher = {
// encriptando
  encode: function (text, displace) {

    text = text.toUpperCase();
    let array = text.split('');
    let encrypted = '';

    array.forEach(function (element) {
      let index = element.charCodeAt(0);
      if (index > 64 && index < 91) {
        let nextIndex = (index - 65 + displace) % 26 + 65;
        encrypted += String.fromCharCode(nextIndex);
      } else {
        encrypted += element;
      }
    });
    return encrypted;
  },
  decode: function (text, displace) {
    text = text.toUpperCase();
    let array = text.split('');
    let encrypted = '';

    array.forEach(function (element) {
      let index = element.charCodeAt(0);
      if (index > 64 && index < 91) {
        let nextIndex = (index - 65) - (displace % 26);
        if (nextIndex < 0) {
          nextIndex += 26
        }
        encrypted += String.fromCharCode(nextIndex + 65);
      } else {
        encrypted += element;
      }
    });
    return encrypted;
  }
}