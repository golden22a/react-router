import React, { Component } from 'react';
import Debit from './Debit';
import axios from 'axios';

class DebitsList extends Component {
    constructor() {
        super();
        this.state={
            debits:[] 
        };
    }
    componentDidMount(){
    axios.get('/debits').then( res => {
        this.setState({
            debits:res.data
        });
    });
    }
    render() {
       const debits= this.state.debits.map((el)=>{
           console.log(el.date);
            return <Debit debit={el} key={el.id} />
        })
        console.log(debits);
       
        return (
            <div>
            <h1> Debits </h1>
            <h3> account balance {this.props.accountBalance} </h3>
            <table>
            <thead>
                <tr><th>Description</th><th>ammount</th><th>date</th></tr>
                </thead>
                <tbody>
                {debits}
                </tbody>
            </table>
            </div>
        );
    }
}

export default DebitsList;