function Product(name, price){
    if(price <=0){
        throw new Error(" The Price can not be zero and less than zero")

    }
    this.name = name;
    this.price = price;

    this.showProduct = function (){
        console.log("Product:", this.name);
        console.log("Price:",+ this.price)
    }
}
try {

    // Valid product
    const product1 = new Product("Laptop", 50000);

    product1.showProduct();


    // Invalid product
    const product2 = new Product("Mobile", -10000);

    // This will not run because an error is thrown above
    product2.showProduct();

} catch (error) {

    console.log("Error:", error.message);
}