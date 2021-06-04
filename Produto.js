import React, { Component } from 'react';
import {Text} from 'react-native';

class Produto extends Component{

    state = {
        produto: 'Sabonete Dove',
        peso: 90,
    }

    render(){
        let {produto, peso} = this.state;
        return(
            <Text>{produto} - {peso} gramas</Text>
        );
    }


}
export default Produto;