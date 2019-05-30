import React, { Component } from "react";
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
    render() {
        return (
            <>
                <ToastContainer />
                <Routes />
            </>
        );
    }
}

export default App;
