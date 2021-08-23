import React from "react";
import '../style/style.css';
import Products from "./Products";
import datas from "../data.json";
import Cart from "./Cart";
import Aside from "./Aside";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            filterSize: [],
            filterPrice: "select",
            cartOpen: "",
            cart: []
        }
       
    }

    componentDidMount() {
        if(localStorage.carts){
            this.setState({cart: JSON.parse(localStorage.carts) || []});
        }
        window.addEventListener("beforeunload", this.handleUpdateLocalStorage);
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.handleUpdateLocalStorage);
    }

    //filter by price 

    filterByPrice = ({target}) => {
        let {name, value} = target;
        this.setState({[name]: value});
    }

    //filter by size

    filterBySize = ({target}) => {
        let {id} = target; 
        let filterSize = this.state.filterSize;
        if(filterSize.includes(id)){
            this.setState((prevState) => ({filterSize: prevState.filterSize.filter(s => s !== id)}))
        }else {
            this.setState((prevState) => ({filterSize: prevState.filterSize.concat(id)}));
        }
       
    }

   //cart open

    handleCartOpen = ({target}) => {
       this.setState({cartOpen: true})
    }

    //cart close
    handleCartClose = () => {
        this.setState({cartOpen: false});
    }

    //get total
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
        this.setState({cart, cartOpen: true})
    }

    reduceItem = (event) => {
        let {id} = event.target;
        let cart = this.state.cart;
        let item = cart.findIndex(c => c.product.id === Number(id));
        cart[item].quantity = cart[item].quantity > 1 ? cart[item].quantity -= 1 : cart[item].quantity;
        console.log(cart[item]);
         this.setState({cart})

    }

    removeItem = ({target}) => {
        let {id} = target;
        let cart = [...this.state.cart];
        let item = cart.findIndex(c => c.product.id === Number(id));
        cart.splice(item, 1);
        this.setState({cart})
       
    }

    //handle local storage
    handleUpdateLocalStorage = () => {
        localStorage.setItem("carts", JSON.stringify(this.state.cart, "total", this.state.total));
    }

    render() {
       
        let cart = this.state.cart;
        let totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

        return (
           <main className="relative px-72 py-20">
               <div className="w-16 h-16 bg-black fixed right-0 top-0 flex justify-center items-center cursor-pointer" onClick={this.handleCartOpen}>
                   <img src="/static/bag-icon.png" alt="cart"/>
                   <div className="w-4 h-4 rounded-full bg-yellow-500 text-black absolute text-center right-2 bottom-3 text-xs">{totalQuantity}</div>
               </div>
               {/* Sizes */}
              <section className="flex justify-between">
                    < Aside products = {datas.products} filterBySize={this.filterBySize} {...this.state}/>
                    <article className="flex-80">
                            < Products data = {datas.products} filterByPrice = {this.filterByPrice} {...this.state} handleAddCart = {this.handleAddCart}/>
                    </article>
                   
              </section>
            
               {
                    < Cart {...this.state} handleCartOpen = {this.handleCartOpen} handleCartClose = {this.handleCartClose} handleAddCart = {this.handleAddCart} reduceItem = {this.reduceItem} removeItem = {this.removeItem} totalQuantity={totalQuantity} total={this.getTotal()}/>
               }
              
           </main>
                
            
        )
    }
}

export default App;