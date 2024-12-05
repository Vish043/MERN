/*A warehouse tracks inventory levels for products and raises an alert if any product's quantity
 fall burekis levels are:

Critical: less than 10 units (should alert "Rostock Imediately") Low: between 10 and 20 units 
(should alert "Stock is Lov).

Adequate: more than 20 units (no alert needed).*/

function warehouse(units) {
    if (units < 10) {
        console.log("Rostock Immediately");
    } else if (units >= 10 && units <= 20) {
        console.log("Stock is Low");
    } else {
        console.log("Adequate");
    }

}
let x = 21
console.log(warehouse(x))