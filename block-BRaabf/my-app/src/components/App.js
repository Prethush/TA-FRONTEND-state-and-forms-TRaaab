import React from 'react';
import '../style/style.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            steps: 5,
            max: 15
        }
    }

    handleIncrement = () => {
        let {counter, steps, max} = this.state;
        this.setState({
            counter: counter + steps > max ? counter : counter + steps
        });
    }
    
    handleDecrement = () => {
        let {counter, steps, max} = this.state;
        this.setState({
            counter: counter - steps
        })
    }
    handleReset = () => {
        this.setState({
            counter: 0
        })
    }
    render(){
        return(
            <div className="text-center my-20">
                <h1 className="text-6xl font-bold text-blue-600">{this.state.counter}</h1>
                <div className="flex mx-auto my-8 w-1/3 justify-between">
                    <div>
                        <h3 className="text-4xl my-4">Steps</h3>
                        {
                            [5, 10, 15].map((value, i) => <button className={this.state.steps === value ? "active" : ""} key={i} onClick={() => {
                                this.setState({
                                    steps: value
                                })
                            }}>{value}</button>)
                        }
                    </div>
                    <div>
                        <h3 class="text-4xl my-4">Max Value</h3>
                        {
                            [15, 100, 200].map((value, i) => <button className={this.state.max === value ? "active" : ""} onClick={() => {
                                this.setState({
                                    max: value
                                })
                            }} key={i}>{value}</button>)
                        }
                    </div>
                   
                </div>
                <div>
                        <button className="p-2 bg-green-500 text-white font-semibold hover:bg-green-400"onClick={this.handleIncrement}>Increment</button>
                        <button className="p-2 bg-green-500 text-white font-semibold hover:bg-green-400" onClick={this.handleDecrement}>Decrement</button>
                        <button className="p-2 bg-green-500 text-white font-semibold hover:bg-green-400" onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default App;