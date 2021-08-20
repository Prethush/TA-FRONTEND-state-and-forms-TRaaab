import React from "react";
import '../style/style.css';
import Products from "./Products";
import datas from "../data.json";
import Cart from "./Cart";


class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            filterSize: [],
            filterPrice: "select",
            cartOpen: "",
            cart: [],
            total: 0
        }
    }

    filterByPrice = ({target}) => {
        let {name, value} = target;
        this.setState({[name]: value});
    }

    filterBySize = ({target}) => {
        let {id} = target; 
        let filterSize = this.state.filterSize;
        if(!filterSize.includes(id)){
            filterSize.push(id);
        }else{
            let index = filterSize.indexOf(id);
            filterSize.splice(index, 1);
        }
        this.setState({filterSize});
    }

    getAllProducts = () => {
        let allProducts, arr = [];
        let filterSize = this.state.filterSize;
        if(!filterSize.length){
            allProducts = [...datas.products];
        }else {
            for(let i = 0; i < filterSize.length; i++){
                let elm = datas.products.filter(data => data.availableSizes.includes(filterSize[i]));
                arr.push(elm);
            }
            arr = arr.flat(Infinity);
            allProducts = arr.reduce((acc, curr) => {
              if(!acc.includes(curr)) {
                  acc.push(curr);
              }
              return acc;
          }, [])
        }
 
        return allProducts;
    }

    handleCartOpen = ({target}) => {
       this.setState({cartOpen: true})
    }

    handleCartClose = () => {
        this.setState({cartOpen: false});
    }

    getTotal = () => {
        let cart = this.state.cart;
        let total = cart.reduce((acc, curr) => {
            acc += curr.product.price * curr.quantity;
            return acc;
        }, 0)
        return total;
    }
    //Add items to cart

    handleAddCart = (e, addProduct) => {
       
        let cart = this.state.cart;
        let {id} = e.target;
        if(!cart.length){
            cart.push({
                product: addProduct,
                quantity: 1
            })
          ;
            
        }else {
            let item = cart.findIndex(c => c.product.id === Number(id));
            if(item === -1){
                cart.push({
                    product: addProduct,
                    quantity: 1
                })
            }else {
               cart[item].quantity += 1;   
            }
        }
        
        
        this.setState({cart, cartOpen: true, total: this.getTotal()});
    }

    reduceItem = (event) => {
        let {id} = event.target;
        let cart = this.state.cart;
        let item = cart.findIndex(c => c.product.id === Number(id));
        cart[item].quantity = cart[item].quantity > 1 ? cart[item].quantity -= 1 : cart[item].quantity;
        console.log(cart[item]);
         this.setState({cart, total: this.getTotal()});

    }

    removeItem = ({target}) => {
        let {id} = target;
        let cart = this.state.cart;
        let item = cart.findIndex(c => c.product.id === Number(id));
       
        cart.splice(item, 1);
        this.setState({cart, total: this.getTotal()});
    }

    render() {
        let filterSize = this.state.filterSize;
        let filterPrice = this.state.filterPrice;
        let cart = this.state.cart;

        let allProducts = this.getAllProducts();
        if(filterPrice === "high"){
            allProducts = allProducts.sort((a, b) => b.price - a.price);
        }else if(filterPrice === "low"){
            allProducts = allProducts.sort((a, b) => a.price - b.price);
        }else {
            allProducts = allProducts.sort((a, b) => a.id - b.id);
        }
        
       
        let allSizes = datas.products.reduce((acc, curr) => acc.concat(curr.availableSizes), []);
        let everySize = allSizes.reduce((acc, curr) => {
            if(!acc.includes(curr)){
                acc.push(curr);
            }
            return acc;
        }, []);

        return (
           <main className="relative px-72 py-20">
               <div className="w-16 h-16 bg-black fixed right-0 top-0 flex justify-center items-center cursor-pointer" onClick={this.handleCartOpen}>
                   <img src="/static/bag-icon.png" alt="cart"/>
                   <div className="w-4 h-4 rounded-full bg-yellow-500 text-black absolute text-center right-2 bottom-3 text-xs">{cart.length}</div>
               </div>
               {/* Sizes */}
              <section className="flex justify-between">
                    <div className="flex-10">
                            <h3 className="my-2 text-xl font-bold">Sizes:</h3>
                            <div className="flex flex-wrap">
                                {
                                    everySize.map(size => (
                                        <div key={size} id={size} className={filterSize.includes(size) ? "flex justify-center items-center w-10 h-10 rounded-full bg-black text-white mr-1 mb-2 cursor-pointer text-sm" : "flex justify-center items-center w-10 h-10 rounded-full bg-gray-300 mr-1 mb-2 cursor-pointer border-2 hover:border-black text-sm"} onClick={this.filterBySize}> 
                                           {size}
                                        </div>
                                    ))
                                }
                            </div>
                    </div>

                    <article className="flex-80">
                            < Products allProducts = {allProducts} filterByPrice = {this.filterByPrice} {...this.state} handleAddCart = {this.handleAddCart}/>
                    </article>
                   
              </section>
            
               {
                    < Cart {...this.state} handleCartOpen = {this.handleCartOpen} handleCartClose = {this.handleCartClose} handleAddCart = {this.handleAddCart} reduceItem = {this.reduceItem} removeItem = {this.removeItem}/>
               }
              
           </main>
                
            
        )
    }
}

export default App;