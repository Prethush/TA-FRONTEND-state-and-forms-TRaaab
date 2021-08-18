import React from 'react';
import '../style/style.css';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            address: "",
            postal: "",
            city: "",
            country: "",
            checked: false,
            errors: {
                address: ""
            }
        }
    }

    handleInput = ({target}) => {
        let {name, value} = target;
        let errors = this.state.errors;
        errors.address = (name === "address") && (value.length < 8) ? "You need to enter at-least 8 characters" : "";
        this.setState({errors, [name]: value});
    }

    handleChecked = ({target}) => {
        let {name, checked} = target;
        this.setState({[name]: checked})
    }

    render() {
        let {address} = this.state.errors;
        return (
            <>
                <header className="bg-gray-700 text-center py-6">
                    <h1 className="text-4xl text-white font-bold my-2">📑 Learning About Forms</h1>
                    <h3 className="text-xl text-white my-3">Controlled vs Uncontrolled Component</h3>
                </header>
                <h2 className="text-gray-900 my-12 text-3xl font-bold text-center">Controlled Component</h2>
                <section className="flex justify-between px-16">

                        <form className="flex-47 flex flex-col border-2 border-red-600  rounded-lg p-8 text-gray-900 text-xl">
                            <legend className="text-3xl text-blue-800 font-bold my-2">Shipping Address</legend>

                            <label htmlFor="address">Address</label>
                            <input className={!address ? "p-1 rounded-md my-3 border-2 border-gray-300": "border-2 border-red-500 p-1 rounded-md my-3"} type="text" id="address" name="address" onChange={this.handleInput} value={this.state.address}/>
                            <span className="text-lg my-2 text-red-500">{address}</span>

                            <label htmlFor="postal">ZIP/Postal Code</label>
                            <input className="p-1 rounded-md my-3 border-2 border-gray-300" type="text" id="postal" name="postal" onChange={this.handleInput} value={this.state.postal}/>

                            <label htmlFor="city">City</label>
                            <input className="p-1 rounded-md my-3 border-2 border-gray-300" type="text" id="city" name="city" onChange={this.handleInput} value={this.state.city}/>

                            <label htmlFor="country">Country</label>
                            <input className="p-1 rounded-md my-3 border-2 border-gray-300" type="text" id="country" name="country" onChange={this.handleInput} value={this.state.country}/>

                        </form>

                        <form className="flex-47 flex flex-col border-2 border-red-600  rounded-lg p-8 text-gray-900 text-xl">
                            <legend className="text-3xl text-blue-800 font-bold my-2">Billing Address</legend>

                            <label className="cursor-pointer my-2" htmlFor="checkbox"><input className="mr-2 mb-3" type="checkbox" id="checkbox" onChange={this.handleChecked} checked={this.state.checked} name="checked"/>Same as the Shipping Address?</label>

                            <label htmlFor="address">Address</label>
                            <input className="p-1 rounded-md my-3 border-2 border-gray-300" readOnly type="text" id="address" name="address" onChange={this.handleInput} value={this.state.checked ? this.state.address: ""}/>

                            <label htmlFor="postal">ZIP/Postal Code</label>
                            <input className="p-1 rounded-md my-3 border-2 border-gray-300" readOnly type="text" id="postal" name="postal" onChange={this.handleInput} value={this.state.checked ? this.state.postal: ""}/>

                            <label htmlFor="city">City</label>
                            <input className="p-1 rounded-md my-3 border-2 border-gray-300" readOnly type="text" id="city" name="city" onChange={this.handleInput} value={this.state.checked ? this.state.city: ""}/>

                            <label htmlFor="country">Country</label>
                            <input className="p-1 rounded-md my-3 border-2 border-gray-300" readOnly type="text" id="country" name="country" onChange={this.handleInput} value={this.state.checked ? this.state.country : ""}/>

                        </form>
                
                </section>
            </>
        )
    }
}

export default App;
