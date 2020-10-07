import {Coffee} from "./Coffee";
import {Imilk} from "./Imilk";

abstract class Cortado extends Coffee implements Imilk{
    
    MlMilk(){
        return 25;
    }

    public Price(): number{
        return 25;
    }

    constructor(discount:number){
        super(discount)
    }
    
    public Strength(): string{
        return "Mild";
    }


}