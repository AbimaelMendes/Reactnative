import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Exe1 extends Component{

    state = {
        novoNome:'JORGE DA BORRACHARIA'
    }

    aoClicar = () =>{
        
        this.setState({novoNome: 'BORACHARIA DO JORGE'});
    }

    render(){
        let{novoNome} = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.texto} onPress={this.aoClicar}>{novoNome}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center'
    },

    texto:{
        textAlign: 'center',
        color:'orange'

    }
});

export default Exe1;