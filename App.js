import React, { Component } from 'react';
import{StyleSheet, Text, View} from 'react-native';

class index extends Component {
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.title}>Olá, Mundo!</Text>
             <Text style={styles.title}>Olá, Mundo!2</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
        backgroundColor: "white"
        
    },
    title:{
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#26232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default index;