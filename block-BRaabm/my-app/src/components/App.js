import React from 'react';
import '../style/style.css';
import Main from './Main';

class App extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return(
           <>
                <aside className="flex-20 bg-red-300">

                </aside>
                <main className="flex-80 p-8">
                    < Main />
                </main>
           </>
        )
    }
}

export default App;