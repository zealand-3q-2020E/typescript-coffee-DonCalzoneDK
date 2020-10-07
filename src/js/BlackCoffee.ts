import {Coffee} from "./Coffee";

export class BlackCoffee extends Coffee {
    
    public Price(): number{
        return 20;
    }

    public DiscountPrice(): number{
        let result: number =20 - this.Discount;
        return (result);
    }

    constructor(discount:number=4){
        super(discount)
    }
    
    public Strength(): string{
        return "Strong";
    }


}