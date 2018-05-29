import React, { Component } from 'react'

import '../App.css'

export default class Account extends Component {
    render() {
        return (
            <div>
                <h1 className="account">Account</h1>
                <div className="account-wrapper">
                <label>Balance</label>
                   <input disabled value="1200" type="text"/>
                <label>Currency</label>   
                   <input value="EUR" disabled type="text"/>                
                </div>
            </div>
        )
    }
}
