function convertirARomanos(num) {

    if(num > 0){
        return "I".repeat(num);
    }
    else{
        return "Número no válido"
    }

}

export default convertirARomanos;
