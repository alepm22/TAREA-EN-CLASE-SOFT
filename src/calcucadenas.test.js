import calculadora from "./calcucandenas.js";

describe("Sumar", () => {
  it("deberia devolver 0 si se envia una cadena sin caracteres", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("deberia devolver el unico valor que lleva la cadena", () => {
    expect(calculadora("1")).toEqual(1);
  });
  it("deberia devolver 6 si le enviamos una cadena con dos numeros: '2,4'", () => {
    expect(calculadora("2,4")).toEqual(6);
  });
  it("deberia devolver 26 si le enviamos una cadena con varios numeros: '2,4,5,4,1,10'", () => {
    expect(calculadora("2,4,5,4,1,10")).toEqual(26);
  });
  it("deberia devolver 26 si le enviamos una cadena con varios numeros separados por guiones: '2-4-5-4-1-10'", () => {
    expect(calculadora("2-4-5-4-1-10")).toEqual(26);
  });
  it("deberia ignorar los numeros mayores a 1000 en la suma, si se le envia: '2-4-5-4-1-10,1000,1001,1050' devuelve 1026", () => {
    expect(calculadora("2-4-5-4-1-10,1000,1001,1050")).toEqual(1026);
  });
  it("deberia devolver 26 si le enviamos una cadena con varios numeros y un delimitador nuevo definido al principio de la cadena como: '//[;],2,4;5,4;1-10'", () => {
    expect(calculadora("//[;],2,4;5,4;1-10")).toEqual(26);
  });
});
