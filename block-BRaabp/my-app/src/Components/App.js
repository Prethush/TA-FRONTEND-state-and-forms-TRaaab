import React from 'react';
import '../style/style.css';
import datas from '../data';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            inputText: "",
            fontSize: "16"
        }
    }

    handleText = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }
    handleFontSize = (event) => {
        this.setState({
            fontSize: event.target.value
        })
    }
    render() {
        let size = this.state.fontSize + "px";
        return (
            <>
                <h1 className="text-center">Font Slider</h1>
                <div className="input-box flex">
                    <input value={this.state.inputText} type="text" className="input-text" onChange={this.handleText} placeholder="Enter the text" />
                    <input className="input-slider" value={this.state.fontSize} type="range" min="16" max="100" onChange={this.handleFontSize}/>
                </div>

                <section className="flex wrap">
                    {
                        datas.map((data) => (
                            <div className="flex-50 output-box" key={data}>
                                <h2>{data}</h2>
                                <div>
                                    <h2 style= {{fontFamily: data, fontSize: size}}>{this.state.inputText}</h2>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </>
        )
    }
}

export default App;
