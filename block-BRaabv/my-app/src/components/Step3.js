import React from 'react';
import '../style/style.css';

class Step3 extends React.Component {

    constructor(props) {
        super();
       
    }

    
    render() {
        
        if(this.props.currentStep !== 3) {
            return null;
        }
        return (
                
                <>
                    <span className="text-gray-500">Step3/3</span>
                    <legend className="text-3xl text-blue-900 font-bold my-4">Checkbox</legend>
                    
                            <label className="text-gray-900 block" htmlFor="gender">Gender</label>
                            <select className="py-2 px-6 rounded-lg block my-2 form-control"id="gender" onChange={this.props.handleChange} value={this.props.select} name="select">
                            <option value="Select an option" defaultValue hidden>Select an option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            </select>
                </>
            
        )
    }
}

export default Step3;