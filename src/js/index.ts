
import { Cortado } from "./Cortado";
import { Coffee } from "./Coffee";
import { Latte } from "./Latte";
import { BlackCoffee } from "./BlackCoffee";


let cortado = new Cortado();
console.log(cortado.Price)
let latte = new Latte();
console.log(latte.Price)
let blackCoffee = new BlackCoffee();
console.log(blackCoffee.Price);
console.log(blackCoffee.DiscountPrice);

function printOut(c : Coffee) :void
{
    console.log(c.CoffeeDrink);
}


