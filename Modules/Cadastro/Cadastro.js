import React, {Compónent} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

class Cadastro extends Component{
    render(){
        return(
            <View>
                <Text>Nome: </Text>
                <TextInput 
                    placeholder={'Digite seu Nome...'} />
                <Text>Número: </Text>
                <TextInput 
                    placeholder={'Digite seu número...'} />
                <Text>Endereço: </Text>
                <TextInput 
                    placeholder={'Digite seu Endereço...'} />  

                <Button title={Cadastrar} />          
            </View>
        );
    }
}

export default Cadastro;