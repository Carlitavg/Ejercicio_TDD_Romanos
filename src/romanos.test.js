import convertirARomanos from"./romanos.js"

describe("Conversión de números a romanos", () => {
    it("Debería convertir 1 a 'I'", () => {
        expect(convertirARomanos(1)).toEqual("I");
    });
    it("Debería convertir 2 a 'II'", () => {
        expect(convertirARomanos(2)).toEqual("II");
    });
    it("Debería convertir 3 a 'III'", () => {
        expect(convertirARomanos(3)).toEqual("III");
    });
    it("No debería convertir 0 a romanos", () => {
        expect(convertirARomanos(0)).toEqual("Número no válido");
    });
    it("Debería convertir 4 a 'IV'", () => {
        expect(convertirARomanos(4)).toEqual("IV");
    });
    it("Debería convertir 5 a 'V'", () => {
        expect(convertirARomanos(5)).toEqual("V");
    });
    it("Debería convertir 6 a 'VI'", () => {
        expect(convertirARomanos(6)).toEqual("VI");
    });
    it("Debería convertir 7 a 'VII'", () => {
        expect(convertirARomanos(7)).toEqual("VII");
    });
    it("Debería convertir 8 a 'VIII'", () => {
        expect(convertirARomanos(8)).toEqual("VIII");
    });
    it("Debería convertir 9 a 'IX'", () => {
        expect(convertirARomanos(9)).toEqual("IX");
    });
    it("Debería convertir 10 a 'X'", () => {
        expect(convertirARomanos(10)).toEqual("X");
    });
});