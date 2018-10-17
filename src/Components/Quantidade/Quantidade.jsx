import React, { Component } from 'react';

export default class Quantidade extends Component{

    render(){
        return(
            <input type="number" step="0.01" min="0"  value={this.props.quantidade}/>
        )
            
        
    }

} 