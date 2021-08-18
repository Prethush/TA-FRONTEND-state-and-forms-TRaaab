import React from 'react';
import '../style/style.css';

class Step2 extends React.Component {
    render() {
        if(this.props.currentStep !== 2){
            return null;
        }
        return (
            <>
                <span className="text-gray-500">Step2/3</span>
                <legend className="text-3xl text-blue-900 font-bold my-4">Message</legend>
                <label className="text-gray-900 block"htmlFor="message">Message</label>
                <textarea className="form-control p-2 w-full block rounded-lg my-2 border-2 border-gray-300" id="message" rows="8" value={this.props.message} onChange={this.props.handleChange} placeholder="Enter message" name="message"></textarea>
            </>
        )
    }
}

export default Step2;