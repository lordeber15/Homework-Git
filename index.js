function laCajaDePandora(numero) {
    // proximamente escribiremos codigo aqui
    if (numero % 2 === 0) {
        return numero.toString(2);
    } else {
        return numero.toString(16);
    }
}

const martoObj = () => {
    return {
        nombre: "marto",
        edad: 15,
        origin: "Arg"
    }
}