Quagga.init({
  inputStream: {
    name: "Live",
    type: "LiveStream",
    target: document.querySelector('#interactive'),
    constraints: {
      width: 640,
      height: 480,
      facingMode: "environment" // Puede ser "user" si quieres utilizar la cámara frontal
    },
  },
  decoder: {
    readers: ["ean_reader"] // Puedes añadir más lectores si necesitas
  }
}, function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Iniciando el lector de códigos de barras...");
  Quagga.start();
});

Quagga.onDetected(function(result) {
  var code = result.codeResult.code;
  console.log("Código de barras detectado: " + code);
  document.getElementById("result").innerHTML = "Código de barras: " + code;
});
