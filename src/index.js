let ButtonEncode = document.getElementById("encode");
let ButtonDecode = document.getElementById("decode");
let string = '';
let offset = 0;

function actionData() {
  string = document.getElementById("texto").value;
  offset = parseInt(document.getElementById("displace").value);
}

ButtonEncode.onclick = function () {
  actionData();
  document.getElementById("result").value = cipher.encode(offset, string);
};

ButtonDecode.onclick = function () {
  actionData();
  document.getElementById("result").value = cipher.decode(offset, string);
};