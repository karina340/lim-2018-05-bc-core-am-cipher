window.cipher = {
  encode: function (offset, text) {
    text = text.toUpperCase();
    let array = text.split('');
    let encrypted = '';

    array.forEach(function (element) {
      let index = element.charCodeAt(0);
      let nextIndex = (index - 65 + offset) % 26 + 65;
      encrypted += String.fromCharCode(nextIndex);
    });
    return encrypted;
  },
  decode: function (offset, text) {
    text = text.toUpperCase();
    let array = text.split('');
    let encrypted = '';

    array.forEach(function (element) {
      let index = element.charCodeAt(0);
      let nextIndex = (index - 65) - offset;
      if ( nextIndex < 0) nextIndex += 26;
      nextIndex = (nextIndex % 26) + 65;
      encrypted += String.fromCharCode(nextIndex);
    });
    return encrypted;
  }
}

