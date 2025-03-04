import convertirARomanos from"./romanos.js"

describe("Conversión de números a romanos", () => {
    it("Debería convertir 1 a 'I'", () => {
        expect(convertirARomanos(1)).toEqual("I");
    });
    it("Debería convertir 2 a 'II'", () => {
        expect(convertirARomanos(2)).toEqual("II");
    });
    
});