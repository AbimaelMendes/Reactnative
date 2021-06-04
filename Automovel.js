import React, {Component} from 'react';
import {Text} from 'react-native';

class Automovel extends Component{
    state = {
        automovel: 'celta',
        velocidade: 0,
    }

    componentDidMount(){
        this.setState({velocidade:100});
    }

    render(){
        let {automovel, velocidade} = this.state;
        return(
            <Text>{automovel} {velocidade} Km/h</Text>
        );
        
    }
}

export default Automovel;