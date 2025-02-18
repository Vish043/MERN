export function convert(C){
    let f = 0
    let k = 0

    f=(C*9/5)+32
    k=C+273.15

    return `Fahrenheit = ${f}\nKelvin = ${k}`;
}