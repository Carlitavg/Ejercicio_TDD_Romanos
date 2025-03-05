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
    it("Debería convertir del 11 al 39 a romanos", () => {
        expect(convertirARomanos(11)).toEqual("XI");
        expect(convertirARomanos(13)).toEqual("XIII");
        expect(convertirARomanos(15)).toEqual("XV");
        expect(convertirARomanos(19)).toEqual("XIX");
        expect(convertirARomanos(20)).toEqual("XX");
        expect(convertirARomanos(21)).toEqual("XXI");
        expect(convertirARomanos(30)).toEqual("XXX");
        expect(convertirARomanos(31)).toEqual("XXXI");
        expect(convertirARomanos(39)).toEqual("XXXIX");
    });
    it("Debería convertir 40 a 'XL'", () => {
        expect(convertirARomanos(40)).toEqual("XL");
    });
    it("Debería convertir del 40 al 49 a romanos", () => {
        expect(convertirARomanos(40)).toEqual("XL");
        expect(convertirARomanos(42)).toEqual("XLII");
        expect(convertirARomanos(43)).toEqual("XLIII");
        expect(convertirARomanos(44)).toEqual("XLIV");
        expect(convertirARomanos(45)).toEqual("XLV");
        expect(convertirARomanos(47)).toEqual("XLVII");
        expect(convertirARomanos(49)).toEqual("XLIX");
    });
    it("Debería convertir 50 a 'L'", () => {
        expect(convertirARomanos(50)).toEqual("L");
    });
    it("Debería convertir algunos números del 50 al 89 a romanos", () => {
        expect(convertirARomanos(50)).toEqual("L");
        expect(convertirARomanos(53)).toEqual("LIII");
        expect(convertirARomanos(59)).toEqual("LIX");
        expect(convertirARomanos(62)).toEqual("LXII");
        expect(convertirARomanos(68)).toEqual("LXVIII");
        expect(convertirARomanos(70)).toEqual("LXX");
        expect(convertirARomanos(74)).toEqual("LXXIV");
        expect(convertirARomanos(79)).toEqual("LXXIX");
        expect(convertirARomanos(80)).toEqual("LXXX");
        expect(convertirARomanos(85)).toEqual("LXXXV");
    });
    it("Debería convertir 90 a 'XC'", () => {
        expect(convertirARomanos(90)).toEqual("XC");
    });
    it("Debería convertir algunos números del 91 al 99 a romanos", () => {
        expect(convertirARomanos(91)).toEqual("XCI");
        expect(convertirARomanos(94)).toEqual("XCIV");
        expect(convertirARomanos(95)).toEqual("XCV");
        expect(convertirARomanos(98)).toEqual("XCVIII");
        expect(convertirARomanos(99)).toEqual("XCIX");
    });
    it("Debería convertir 100 a 'C'", () => {
        expect(convertirARomanos(100)).toEqual("C");
    });
    it("Debería convertir algunos números del 101 al 399 a romanos", () => {
        expect(convertirARomanos(101)).toEqual("CI");
        expect(convertirARomanos(150)).toEqual("CL");
        expect(convertirARomanos(175)).toEqual("CLXXV");
        expect(convertirARomanos(199)).toEqual("CXCIX");
        expect(convertirARomanos(222)).toEqual("CCXXII");
        expect(convertirARomanos(250)).toEqual("CCL");
        expect(convertirARomanos(275)).toEqual("CCLXXV");
        expect(convertirARomanos(299)).toEqual("CCXCIX");
        expect(convertirARomanos(321)).toEqual("CCCXXI");
        expect(convertirARomanos(350)).toEqual("CCCL");
        expect(convertirARomanos(375)).toEqual("CCCLXXV");
        expect(convertirARomanos(399)).toEqual("CCCXCIX");
    });
    it("Debería convertir 400 a 'CD'", () => {
        expect(convertirARomanos(400)).toEqual("CD");
    });
    it("Debería convertir algunos números del 401 al 499 a romanos", () => {
        expect(convertirARomanos(401)).toEqual("CDI");
        expect(convertirARomanos(450)).toEqual("CDL");
        expect(convertirARomanos(475)).toEqual("CDLXXV");
        expect(convertirARomanos(499)).toEqual("CDXCIX");
    });
});