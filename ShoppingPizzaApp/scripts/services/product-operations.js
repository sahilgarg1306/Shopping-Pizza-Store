import Product from "../models/product.js";
import makeNetworkCall from "./api-client.js";

const productOperations = {
    products:[],
    search(pizzaId){
        const product = this.products.find(currentProduct=> currentProduct.id == pizzaId);
        console.log('Product Found',product);
        product.isAddedInCart=true;
        console.log('Array', this.products);
    },

    getProductsInCart(){
        const productInBasket = this.products.filter(product => product.isAddedInCart);
        return productInBasket;
    },

    async loadProducts() {
        const pizzas = await makeNetworkCall();
        const pizzasArray = pizzas['Vegetarian'];
        const productsArray = pizzasArray.map(pizza => {
            const currentPizza = new Product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.menu[0].url);
            return currentPizza;
        });
        this.products = productsArray;
        return productsArray;
    },
}

export default productOperations;
