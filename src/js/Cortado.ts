import {Coffee} from "./Coffee";
import {Imilk} from "./Imilk";

export class Cortado extends Coffee implements Imilk{
    
    MlMilk(){
        return 25;
    }

    public Price(): number{
        return 25;
    }

    constructor(discount:number=0){
        super(discount)
    }
    
    public Strength(): string{
        return "Mild";
    }


}