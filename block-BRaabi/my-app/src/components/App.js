import React from 'react';
import data from '../data';
import '../style/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            index: null
        }
    }
    render() {
        return(
           <section className="mx-auto w-1/2 my-20">
                {
                    data.map((value, i) => (
                        <div key={i} className="bg-red-300 my-6">
                            
                                <h2 className={this.state.open && this.state.index === i ? "bg-green-400": "bg-red-400"}>{value.Q}<i onClick={() => {
                                    this.setState({
                                        open: !this.state.open,
                                        index: i
                                    })
                                }} className={this.state.open && this.state.index === i ? "fas fa-hand-point-up": "fas fa-hand-point-down"}></i></h2>
                            
                           
                            <p className={this.state.open && this.state.index === i? "visible" : "hidden"}>{value.A}</p>
                        </div>
                    ))
                }
           </section>
        )
    }
}

export default App;