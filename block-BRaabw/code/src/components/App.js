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
            filterPrice: "",
            cartOpen: "",
            cart: []
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
            allProducts = datas.products;
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

    render() {
        let filterSize = this.state.filterSize;
        let filterPrice = this.state.filterPrice;
        let cart = this.state.cart;

        let allProducts = this.getAllProducts();
                if(filterPrice === "highest-to-low"){
            console.log("Hai");
            allProducts = allProducts.sort((a, b) => b.price - a.price);
        }
        if(filterPrice === "lowest-to-high" || filterPrice === ""){
            allProducts = allProducts.sort((a, b) => a.price - b.price);
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
                            < Products allProducts = {allProducts} filterByPrice = {this.filterByPrice} {...this.state}/>
                    </article>
                   
              </section>
            
               {
                    < Cart {...this.state} handleCartOpen = {this.handleCartOpen} handleCartClose = {this.handleCartClose}/>
               }
              
           </main>
                
            
        )
    }
}

export default App;