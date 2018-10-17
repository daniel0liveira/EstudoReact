import React, { Component } from 'react';

export default class Preco extends Component {
   

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <td className={this.props.preco.melhorPreco > 0 ? 'melhor' : 'normal'} key={this.props.i}>{this.props.preco.preco}</td>
        )
    }

}