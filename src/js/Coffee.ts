/**Abstract Base Class Coffee */
export abstract class Coffee{
    
    /**Discount property for coffee of type number*/
    public Discount: number;
    
    /**Abstract Method Price() */
    public abstract Price(): Number;
    
    /**Method for Coffee Strength */
    public Strength(): string{
        return "Mild"
    }
    
    /**Constructor that takes parameter (discount:number) and sets
     * the "discount" property
     */
    constructor (dicount:number){
        this.Discount = dicount;
    }
    public abstract CoffeeDrink(): string;

}