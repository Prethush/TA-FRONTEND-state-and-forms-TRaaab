import React from 'react';
import '../style/style.css';

class Cart extends React.Component {
    render(){
        console.log(this.props);
        return (
            <section className={this.props.cartOpen === "" ? "hidden": this.props.cartOpen ? "cartOpen": "cartClose"}>
               <span className="absolute py-3 px-5 text-white -left-12 text-xl bg-custom cursor-pointer" onClick={this.props.handleCartClose}>x</span>
               <div className="py-12 flex items-center justify-center relative">
                   <img src="/static/bag-icon.png" alt="cartBasket" className="h-10 w-10 object-cover"/>
                   <h4 className="text-white ml-4 text-xl font-bold">Cart</h4>
                   <div className="w-4 h-4 rounded-full bg-yellow-500 text-black absolute text-center text-xs bottom-10 left-44">{this.props.cart.length}</div>
               </div>
            </section>
        )
    }
}

export default Cart;