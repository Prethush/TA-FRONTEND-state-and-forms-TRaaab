import React from 'react';
import data from '../data';
import '../style/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           activeIndex: null
        }
    }
    render() {
        return(
           <section className="mx-auto w-1/2 my-20">
                {
                    data.map((value, i) => (
                        <div key={i} className="bg-red-300 my-6">
                            
                                <h2 className={this.state.activeIndex === i ? "bg-green-400": "bg-red-400"}>{value.Q}<i onClick={() => {
                                    this.setState({
                                       activeIndex: this.state.activeIndex === i ? null : i
                                    })
                                }} className={this.state.activeIndex === i ? "fas fa-hand-point-up": "fas fa-hand-point-down"}></i></h2>
                            
                           
                            <p className={this.state.activeIndex === i? "visible" : "hidden"}>{value.A}</p>
                        </div>
                    ))
                }
           </section>
        )
    }
}

export default App;