/**Abstract Base Class Coffee */
export abstract class Coffee{
    
    /**Discount property for coffee of type number*/
    public Discount: number;
    
    /**Abstract Method Price() */
    public abstract Price(): number;
    
    /**Method for Coffee Strength */
    public Strength(): string{
        return "Mild"
    }
    /**abstract method to return type of coffee drink */
    public abstract CoffeeDrink(): string;
    
    /**Constructor that takes parameter (discount:number) and sets
     * the "discount" property
     */
    constructor (dicount:number){
        this.Discount = dicount;
    }
    

}