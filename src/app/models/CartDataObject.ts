export interface CartDataObject{
    items: {
        quanity: number,
        id:String;
        name:String;
        image:String;
        description:String;
        price: number;
        inStock: Boolean;
        category_id: String;
        }[],
    total: Number;
}