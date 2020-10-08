import {Coffee} from "./Coffee";

export class BlackCoffee extends Coffee {
    

    public Price(): number{
        let result: number =20 - this.Discount;
        return (result);
    }

    constructor(discount:number=0){
        super(discount)
    }
    
    public Strength(): string{
        return "Strong";
    }
    
    public CoffeeDrink(): string {
        return "Black Coffee";
    }


}