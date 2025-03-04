function convertirARomanos(num) {
    if(num <= 0) return "Número no válido"
    if(num < 4){
        return "I".repeat(num);
    }
    if(num == 4 ){
        return "IV";
    }

}

export default convertirARomanos;
