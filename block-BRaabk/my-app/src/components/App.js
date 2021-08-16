import React from 'react';
import datas from '../data.json';
import '../style/style.css';
import Menu from './Menu';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeTag: "all"
        }
    }

    render() {
        let tags = datas.reduce((acc, data) => {
            if(!acc.includes(data.category)){
                acc.push(data.category);
            }
            return acc;
        }, []);
        tags.unshift("all");
        let allProducts;
        
        if(this.state.activeTag === "all"){
            allProducts = datas;
        }else {
            allProducts = datas.filter(data => this.state.activeTag === data.category);
        }
        console.log(allProducts);
        return (
            <>
                <header className="flex flex-col items-center py-8">
                    <h1 className="text-center text-5xl font-bold text-blue-700 py-2">Our Menu</h1>
                    <hr className="w-20 border-2 border-yellow-700"></hr>
                    <nav className="pt-8">
                        <ul className="flex">
                        {
                            tags.map((tag, i) => (
                                <li key={i} className="mx-6 text-xl"><a className={this.state.activeTag === tag ? "bg-green-500 text-white border-0": ""} href="#" onClick={() => {
                                    this.setState({
                                        activeTag: tag
                                    })
                                }}
                                >{tag.toUpperCase()}</a></li>
                            ))
                        }
                        </ul>
                    </nav>
                </header>

                <main className="p-12">
                    <section className="flex justify-between flex-wrap">
                        < Menu allProducts = {allProducts}/>
                    </section>
                </main>
            </>
        )
    }
}

export default App;