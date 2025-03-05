function convertirARomanos(num) {
    if(num <= 0) return "Número no válido"
    let resultado = ""

    if(num == 500){
        return "D"
    }
    if(num >= 400){
        resultado += "CD"
        num -= 400;
    }
    while (num >= 100) {
        resultado += "C";
        num -= 100;
    }
    if(num >= 90){
        resultado += "XC";
        num -= 90;
    }
    if(num >= 50){
        resultado += "L";
        num -= 50;
    }
    if(num >= 40){
        resultado += "XL";
        num -= 40;
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
