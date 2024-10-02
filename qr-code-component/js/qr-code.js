var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.frontendmentor.io",
  width: 128,
  height: 128,
  colorDark: "#ffffff",
  colorLight: "transparent"
});