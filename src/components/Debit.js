import React, { Component } from 'react';


class Debit extends Component {
    render() {
        console.log('aaa');
        return (
            <tr>
                <td>{this.props.debit.description}</td>
                <td>{this.props.debit.amount}</td>
                <td>{this.props.debit.date}</td>
            </tr>
        );
    }
}

export default Debit;