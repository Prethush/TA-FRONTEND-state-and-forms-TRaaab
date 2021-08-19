import React from "react";

class Products extends React.Component {
    constructor(props){
        super();
        
    }



    render() {
        console.log(this.props);
        let allProducts = this.props.allProducts;
        
        return (
            <>
                
            {/* //sorting (Highest to lowest) */}

                <div className="flex justify-between items-center">
                    <h3 className="text-sm">{allProducts.length} Product(s) found.</h3>
                    <fieldset>
                        <label className="text-lg" htmlFor="sort">Order by</label>
                        <select id="sort" className="p-1 ml-2" name="filterPrice" value={this.props.filterPrice}  onChange={this.props.filterByPrice}>
                            <option value="" defaultValue>Select</option>
                            <option value="highest-to-low">Highest to Lowest</option>
                            <option value="lowest-to-high">Lowest to High</option>
                        </select>
                        
                    </fieldset>
                </div>
                <article className="flex flex-wrap mt-4">
                    {
                        allProducts.map((product, i)  => (
                            <div className="relative flex-25 border-2 border-gray-100  mb-4 p-2" key={i}>
                                <div className="h-custom">
                                    <img className="object-contain w-full h-full" src={product.imgBig} alt={product.title}/>
                                </div>
                                <h4 className="text-center my-2 text-lg">{product.title}</h4>
                                <div className="flex justify-center my-3">
                                    <hr className="w-6 h-1 bg-yellow-400"></hr>
                                </div>

                               <h5 className="text-center mb-4">$<span className="ml-2 text-3xl font-bold">{String(product.price).split(".")[0]}<span className="text-lg font-normal">.{!String(product.price).split(".")[1] ? "00" : String(product.price).split(".")[1].length === 2 ? String(product.price).split(".")[1] : String(product.price).split(".")[1]+"0"}</span></span></h5>

                                <button className="block text-center bg-gray-900 w-full py-3 font-bold text-white">Add to Cart</button>

                                <span className={product.isFreeShipping ? "bg-black text-white p-1 text-xs absolute right-2 top-3": ""}>{product.isFreeShipping ? "Free Shipping": ""}</span>
                            </div>
                        ))
                    }
                </article>
            </>
           
        )
    }
}

export default Products;