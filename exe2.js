import React, {Component} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';

class Exe2 extends Component{

    state ={
        texto: 'ONLING PRESS'
    }

    longPress = () =>{
        this.setState({texto:'segurouuuuuuuuuuuu'});
    }

    render(){
        let{texto} = this.state;
        return(
            <View style={styles.contaiber}>
                <Text onLongPress={this.longPress} style={styles.texto}>{texto}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contaiber:{
        flex:1,
        justifyContent:'center'
    },
    texto:{
        fontSize: 24,
        textAlign:'center',
        color:'blue'
    }
});

export default Exe2;