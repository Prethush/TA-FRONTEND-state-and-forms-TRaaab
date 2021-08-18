import React from 'react';
import '../style/style.css';

class FormValidation extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            email: "",
            passwdOne: "",
            passwdTwo: "",
            errors: {
                username: "",
                email: "",
                passwdOne: "",
                passwdTwo: ""
            }
        }
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    handleInput = ({target}) => {
        let {name, value} = target;
        let errors = this.state.errors;
        switch(name) {
            case "username":
                errors.username = !value ? "Username is required": value.length < 3 ? "Username must be atleast 3 characters": "";
                break;
            case "email": 
                errors.email = !value ? "Email is required":  this.validateEmail(value) ? "": "Email is invalid";
                break;
            case "passwdOne": 
                errors.passwdOne = !value ? "Password is required": value.length < 6 ? "Password must be atleast 6 characters": "";
                break;
            case "passwdTwo": 
                errors.passwdTwo = !value ? "Password2 is required": value === this.state.passwdOne ? "": "Password is incorrect";
                break;
            default: 
                break;
        }
        
        this.setState({errors, [name]: value});
                
        
    }

    handleSubmit = (event) => {
        let errors = this.state.errors;
        let {email, username, passwdOne, passwdTwo} = this.state;
        event.preventDefault();
        for(let key in errors) {
            if(errors[key] !== ""){
                return alert("Enter the correct credentials");
            }
        }

        return email && username && passwdOne && passwdTwo ? alert("You are successfully registered"): alert("Enter the Credentials");
    }

    render() {
        let {username, email, passwdOne, passwdTwo} = this.state.errors;
        return (
            <div className="w-1/3 mx-auto shadow-custom my-24 p-8">
                <form onSubmit={this.handleSubmit}>
                    <legend className="text-3xl font-bold text-center my-3">Register With Us</legend>
                    <label htmlFor="username" className="block text-custom text-xl">Username</label>

                    <input type="text" id="username" value={this.state.username} onChange={this.handleInput} name="username" className={username ? "border-2 border-red-500 p-2 outline-none w-full rounded-md my-3": "border-2 border-gray-400 bg-gray-200 outline-none w-full p-2 rounded-md my-3"} />
                    <span className="block text-red-500 mb-2">{username}</span>
                    <label htmlFor="email" className="block text-custom text-xl">Email</label>

                    <input type="email" id="email" value={this.state.email} onChange={this.handleInput} name="email" className={email ? "border-2 border-red-500 p-2 outline-none w-full rounded-md my-3": "border-2 border-gray-400 bg-gray-200 outline-none w-full p-2 rounded-md my-3"}/>
                    <span className="block text-red-500 mb-2">{email}</span>

                    <label htmlFor="passwd-first" className="block text-custom text-xl">Password</label>

                    <input type="password" id="passwd-first" value={this.state.passwdOne} onChange={this.handleInput} name="passwdOne" className={passwdOne ? "border-2 border-red-500 p-2 outline-none w-full rounded-md my-3": "border-2 border-gray-400 bg-gray-200 outline-none w-full p-2 rounded-md my-3"}/>
                    <span className="block text-red-500 mb-2">{passwdOne}</span>

                    <label htmlFor="passwd-second" className="block text-custom text-xl">Confirm Password</label>

                    <input type="password" id="passwd-second" value={this.state.passwdTwo} onChange={this.handleInput} name="passwdTwo" className={email ? "border-2 border-red-500 p-2 outline-none w-full rounded-md my-3": "border-2 border-gray-400 bg-gray-200 outline-none w-full p-2 rounded-md my-3"}/>
                    <span className="block text-red-500 mb-2">{passwdTwo    }</span>
                    <input type="submit" value="submit" className="p-2 bg-green-500 hover:bg-green-400 text-white font-bold w-full my-3 rounded-md text-xl uppercase"/>
                
                </form>
            </div>
        )
    }
}

export default FormValidation;