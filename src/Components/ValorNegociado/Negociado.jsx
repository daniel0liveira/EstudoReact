import React, { Component } from 'react';

export default class Negociado extends Component{

    render(){
        return(
            <input type="text"   value={this.props.valorNegociado}/>
        )
            
        
    }

} 