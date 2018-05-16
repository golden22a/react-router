import React, { Component } from 'react';


class Credit extends Component {
    render() {
        console.log('aaa');
        return (
            <tr>
                <td>{this.props.credit.description}</td>
                <td>{this.props.credit.amount}</td>
                <td>{this.props.credit.date}</td>
            </tr>
        );
    }
}

export default Credit;