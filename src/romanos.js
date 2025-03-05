function convertirARomanos(num) {
    if(num <= 0) return "Número no válido"
    let resultado = ""

    if(num == 40){
        return "XL"
    }

    while (num >= 10) {
        resultado += "X";
        num -= 10;
    }

    if (num >= 9) {
        resultado += "IX";
        num -= 9;
    }

    if (num >= 5) {
        resultado += "V";
        num -= 5;
    }
    if (num >= 4) {
        resultado += "IV";
        num -= 4;
    }
    
    while (num >= 1) {
        resultado += "I";
        num -= 1;
    }

    return resultado;

}

export default convertirARomanos;
