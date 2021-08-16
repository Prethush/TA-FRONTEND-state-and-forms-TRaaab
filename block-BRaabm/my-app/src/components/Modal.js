import React from 'react';
import '../style/style.css';

class Modal extends React.Component {
    constructor(props) {
        console.log(props);
        super();
    }

    render() {
        console.log(this.props);
        return (
           <div class="absolute bg-green-500 w-80 h-80">
                {/* <h1>{this.props}</h1> */}
           </div>
        )
    }
}

export default Modal;