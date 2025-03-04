function convertirARomanos(num) {
    if(num <= 0) return "Número no válido"
    if(num < 4){
        return "I".repeat(num);
    }
    if(num == 4 ){
        return "IV";
    }
    if(num == 5 ){
        return "V";
    }

}

export default convertirARomanos;
