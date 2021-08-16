import React from 'react';
import '../style/style.css';
import datas from '../data.json';
import Modal from './Modal';

class Main extends React.Component {
    constructor(props) {
        super();
        this.state = {
            activeIndex: null,
            selectedIndex: null,
            modalClose: false
        }
    }

    handleMouseOver = (i) => {
        this.setState({
            activeIndex: i
        }
        )
    }

    handleMouseLeave = (i) => {
        this.setState({
            activeIndex: null
        })
    }

    handleSelect = (index) => {
        this.setState({
            selectedIndex: index
        })
        
    }
    render() {
       
        return (
            <>
                <h1 className="text-center text-4xl font-bold">Movie List</h1>
                <section className="flex flex-wrap justify-between">
                {
                    datas.map((data, i) => (
                        <div key={data.Title} className="flex-50 flex flex-col p-6 my-6 rounded-lg shadow-custom" onMouseOver={() => this.handleMouseOver(i)} onMouseLeave = {() => this.handleMouseLeave(i)}>
                            <div>
                                <img className="w-full rounded-lg h-80 object-cover" src={data.Images[0]} alt={data.Title}/>
                            </div>
                            <h2 className="text-center text-2xl my-4 font-bold">Title: {data.Title}</h2>
                            <h3 className="text-xl text-center font-bold">Released Date: {data.Released}</h3>
                            {
                                this.state.activeIndex === i ? <button onClick = {() => this.handleSelect(i) }className="bg-green-500 p-2 rounded-lg text-white font-bold">More Info</button> : ""
                            }
                        </div>
                    ))
                }
                </section>
                {   
                    
                    this.state.selectedIndex ? < Modal {...datas[this.state.selectedIndex]}  state={false}/> : ""
                }
                
            </>
        )
    }
}

export default Main;