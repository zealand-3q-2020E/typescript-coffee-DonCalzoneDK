import {Coffee} from "./Coffee";
import {Imilk} from "./Imilk";

export class Latte extends Coffee implements Imilk{
    
    MlMilk(){
        return 100;
    }

    public Price(): number{
        return 40;
    }

    constructor(discount:number=0){
        super(discount)
    }
    
    public Strength(): string{
        return "Weak";
    }


}