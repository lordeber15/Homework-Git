function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  if (numero % 2 === 0) {
    let binario = "";
    while (numero > 0) {
      binario = (numero % 2) + binario;
      numero = Math.floor(numero / 2);
    }
    return binario;
  } else {
    let decimal = "";
    while (numero > 16) {
      decimal = (numero % 16) + decimal;
      numero = Math.floor(numero / 16);
    }
    decimal = numero + decimal;
    return decimal;
  }
}

function eber() {
  return {
    nombre: "eber",
    edad: 32,
    nacionalidad: "Peruano",
  };
}
