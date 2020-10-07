import {Coffee} from "./Coffee";
import {Imilk} from "./Imilk";

abstract class Latte extends Coffee implements Imilk{
    
    MlMilk(){
        return 100;
    }

    public Price(): number{
        return 40;
    }

    constructor(discount:number){
        super(discount)
    }
    
    public Strength(): string{
        return "Weak";
    }


}