import React from 'react';
import '../style/style.css'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class Main extends React.Component {
    
    constructor(props) {
        super();
        
        this.state = {
            currentStep: 1,
            fname: "",
            lname: "",
            address: "",
            email: "",
            date: "",
            message: "",
            select: "",
            btn: "",
            errors: {
                email: ""
            }
            
        }
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    handleChange = ({target}) => {
        let {name, value} = target;
        let errors = this.state.errors;
         if(name === "email") {
             errors.email = this.validateEmail(value) ? "": "Email is not valid";
         }else {
             errors.email = "";
         }
        this.setState({errors, [name]: value});
    }

    nextStep = () => {
        let currentStep = this.state.currentStep;
        currentStep = (currentStep + 1 ) > 3 ? currentStep : currentStep + 1;
        this.setState({currentStep, btn: "next"});
    }

    prevStep = () => {
        let currentStep = this.state.currentStep;
        currentStep = (currentStep - 1) < 1 ? currentStep : currentStep - 1;
        this.setState({currentStep, btn: "prev"});
    }

    nextButton = () => {
        let currentStep = this.state.currentStep;
        if(currentStep !== 3){
            return (
                <button className="absolute right-10 bg-blue-500 py-2 px-6 text-white font-bold hover:bg-blue-400 rounded-lg" value="nxtButton" onClick={this.nextStep}>Next</button>
            )
        }
        return null;
    }

    

    prevButton = () => {
        let currentStep = this.state.currentStep;
        if(currentStep !== 1) {
            return (
                <button className="absolute right-28 mx-6 bg-green-500 py-2 px-6 text-white font-bold hover:bg-green-400 rounded-lg" value="prevButton" onClick={this.prevStep}>Previous</button>
            )
        }
        return null;
    }

    handleBtn = () => {
        this.setState({btn: "submit"})
    }

    handleSubmit = (event) => {
        let {fname, lname, email, address, message, select, date} = this.state;
        
        event.preventDefault();
        if(this.state.btn === "submit"){
            alert(
                `Fisrt Name: ${fname}
                Last Name: ${lname}
                Email: ${email}
                Message: ${message}
                Date: ${date}
                Gender: ${select}`
            );
        }
       
    }

    render() {
        let steps = ["step1", "step2", "step3"];
        let imgArray = ["img1.jpg", "img2.jpg", "img3.jpg"];
        let currentStep = this.state.currentStep;
        return (
            <section className="flex justify-between main rounded-lg h-full">
                <aside className="flex-20 bg-red-200 box1">
                    <img className="h-full w-full object-cover" src={imgArray[currentStep-1]} alt="img"/>
                </aside>
                <div className="flex-70  p-16 box2">
                    <form onSubmit={this.handleSubmit} className="relative">
                        <div className="flex justify-between text-center my-4">
                            {
                                steps.map((data, i) => (
                                    <span className={currentStep === i +1 ? "step active": currentStep < i + 1 ? "step": "bg-green-400 step"}>{data}</span>
                                ))
                            }
                        </div>
                        < Step1 handleChange= {this.handleChange} {...this.state}/>
                        < Step2 handleChange = {this.handleChange} {...this.state} />
                        < Step3 handleChange={this.handleChange} {...this.state} handleImage = {this.handleImage}/>
                        <hr className="bg-gray-300 h-0.5 mt-20 mb-12"></hr>
                        {this.prevButton()}
                        {this.nextButton()}
                        {this.state.currentStep === 3 && <input onClick={this.handleBtn} value="submit" type="submit" className="absolute right-5 bg-blue-500 py-2 px-6 text-white font-bold hover:bg-blue-400 rounded-lg" />}
                    </form>
                </div>
            </section>
        )
    }
}

export default Main;