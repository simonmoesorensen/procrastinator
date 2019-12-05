import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar.js';
import Grid from './grid/Grid.js';

class App extends React.Component {


    render() {
        return (
            <div>
                <Navbar onAddItem={this.onAddItem}/>
                <Grid onAddItem={this.onAddItem}/>
            </div>
        )
    };
}

export default App;
