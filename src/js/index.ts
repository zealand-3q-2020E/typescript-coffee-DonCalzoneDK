
import { Cortado } from "./Cortado";
import { Coffee } from "./Coffee";
import { Latte } from "./Latte";
import { BlackCoffee } from "./BlackCoffee";



/**List to display ifferent Coffee */
let coffeeMenuList:Coffee[] = new Array<Coffee>();

/**Creates coffee objects for the coffeeMenuList array */
coffeeMenuList.push(new BlackCoffee());
coffeeMenuList.push(new Cortado());
coffeeMenuList.push(new Latte());

/**prints all coffee elements from list into console */

coffeeMenuList.forEach(coffee =>{
    printOut(coffee);
});



function printOut(c : Coffee) :void
{
    console.log(`Item: ${c.CoffeeDrink()}`);
    console.log(`Item: ${c.Strength()}`);
    console.log(`Item: ${c.Price()}`);
}

/**finds the <div> element in index.htm with id="coffeemenu" */
let element: HTMLDivElement = <HTMLDivElement> document.getElementById("coffeemenu");


/**loop that creates new h4 tag for each element in coffeemenulist */
coffeeMenuList.forEach(coffee => {
    element.innerHTML += `<h4>${coffee.CoffeeDrink()}, pris: ${coffee.Price()}kr. </h4>`;
    });


//add a click eventlister to the button for blackcoffee
let orderButtonBlackCoffee: HTMLButtonElement = 
<HTMLButtonElement> document.getElementById("OrderBlackCoffee");
orderButtonBlackCoffee.addEventListener("click",addBlackCoffee)

//add a click eventlister to the button for latte
let orderButtonLatte: HTMLButtonElement = 
<HTMLButtonElement> document.getElementById("OrderLatte");
orderButtonLatte.addEventListener("click",addLatte)

//add a click eventlister to the button for cortado
let orderButtonCortado: HTMLButtonElement = 
<HTMLButtonElement> document.getElementById("OrderCortado");
orderButtonCortado.addEventListener("click",addCortado)

let OrderCoffeeList:Coffee[] = new Array<Coffee>();

//add black coffee to the orderarray
function addBlackCoffee(e:MouseEvent){
    let blackCoffee:BlackCoffee = new BlackCoffee();
    OrderCoffeeList.push(blackCoffee);
    UpdateOrderList(blackCoffee)
}

//add a latte to the orderarray
function addLatte(e:MouseEvent){
    let latte:Latte = new Latte();
    OrderCoffeeList.push(latte);
    UpdateOrderList(latte)
}

//add a cortadoto the orderarray
function addCortado(e:MouseEvent){
    let cortado:Cortado  = new Cortado();
    OrderCoffeeList.push(cortado);
    UpdateOrderList(cortado)
}


//finds the orderlist in the DOM
//Remove all childs in the list
//Loop the order array and create a new node for each element and add it to the list
//calculate the total price 
function UpdateOrderList(coffee:Coffee){
    console.log("In UpdateOrderList");
    let list = document.getElementById("coffeeOrderList");
    let total:number = 0;

    //remove all the li elements one by one
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }
   
    //add new elements to the DOM from the array
    OrderCoffeeList.forEach(c => {

        total += c.Price();
    
        let newLi:HTMLLIElement = document.createElement('li');
        let newText:Text = document.createTextNode(c.CoffeeDrink())
        newLi.appendChild(newText);
        list.appendChild(newLi);



    });
    //insert the total price into the DOM
       document.getElementById("totalPrice").innerText = (total).toString();


}
