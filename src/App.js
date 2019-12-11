import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar.js';
import Grid from './grid/Grid.js';
import {firebase} from './login/Firebase';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.authChanged = this.authChanged.bind(this);
    }

    state = {
        uid: '',
        isLoggedIn: false
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(this.authChanged)
    }

    authChanged(user) {
        if (user) {
            this.setState({
                uid: user.uid,
                isLoggedIn: true
            })
        } else {
            this.setState({
                uid: '',
                isLoggedIn: false
            })
        }
    }

    login(auth, result) {
        console.log('login');
    }

    logout() {
        firebase.auth().signOut()
    }

    render() {
        return (
            <div>
                <Navbar onAddItem={this.onAddItem}
                        login={this.login}
                        logout={this.logout}
                        isLoggedIn={this.state.isLoggedIn}/>
                <Grid onAddItem={this.onAddItem}/>
            </div>
        )
    };
}

export default App;
