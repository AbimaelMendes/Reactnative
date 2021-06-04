import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Exe extends Component{
    state = {
        nomeVermelho:false
    }

    onPresss = () =>{
        let{nomeVermelho} = this.state;
        this.setState({nomeVermelho:!nomeVermelho});
    }

    render(){
        let {nomeVermelho} = this.state;
        //pao clicar executa uma pressão
        return(
            <View style={styles.container}>
                <Text onPress={this.onPresss} style={[styles.nomePreto, (nomeVermelho?styles.nomeVermelho:{})]}>abimael</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    nomePreto:{
        textAlign:'center',
        fontSize: 24,
        color: 'black'

    },
    nomeVermelho:{
        textAlign:'center',
        fontSize: 60,
        color:'blue'

    },

    container:{
        flex:1,
        justifyContent:'center'
    }
});

export default Exe;