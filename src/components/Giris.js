import React, { Component } from 'react'
import Header from './Header';

class Giris extends Component {
    render() {
        return (
            <div className="App">
            <Header />
            <div className="container">
                <h2>Giriş Yap</h2>
            </div>
            </div>
        )
    }
}

export default Giris;