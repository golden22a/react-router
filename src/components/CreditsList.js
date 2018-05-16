import React, { Component } from 'react';
import Credit from './Credit';
import axios from 'axios';

class CreditsList extends Component {
    constructor() {
        super();
        this.state={
            credits:[] 
        };
    }
    componentDidMount(){
    axios.get('/credits').then( res => {
        this.setState({
            credits:res.data
        });
    });
    }
    render() {
       const credits= this.state.credits.map((el)=>{
           
            return <Credit credit={el} key={el.id} />
        })
       
        return (
            <div>
            <h1> Credits </h1>
            <h3> account balance {this.props.accountBalance} </h3>
            <table>
            <thead>
                <tr><th>Description</th><th>ammount</th><th>date</th></tr>
                </thead>
                <tbody>
                {credits}
                </tbody>
            </table>
            </div>
        );
    }
}

export default CreditsList;