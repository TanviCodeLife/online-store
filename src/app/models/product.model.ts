export class Product{
  message: string = null;
  constructor(
    public itemName: string,
    public type: string,
    public price: number,
    public quantity: number) {};
  }
