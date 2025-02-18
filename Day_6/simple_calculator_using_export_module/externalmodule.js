export function calc(a,b){
    let d=0;
    let e=0;
    let f=0;
    let g=0;

    d=a-b;
    e=a+b;
    f=a*b;
    g=a/b;

    return `addition = ${e}\nsubstraction = ${d}\nmultiplication = ${f} \nDivision = ${g}`;

}