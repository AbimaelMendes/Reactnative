import React, {Component} from 'react';
import {Text} from 'react-native';

class Hello extends Component{
  //variáveis de estado 
  state = {
    nome:null,
    contado:{
      email:'teste',
      telefone:'4545454'
    },
  }
  //primeiro método a ser chamado.
  constructor(props){
    super(props);
    let{nome}=this.state;

  }
  teste(){
    console.log('oiiii');
  }
  //carregando  
  conponentWillMount(){
    console.log("asdasdasdasdasda");
  }
  //é executado após a classe component ser carregada.
  componentDidMount(){
    let nome = 'abimael mendes';
    //altera o va,or da variáveil de estado e atualza no layout.
    this.setState({nome:'novo nome'});
    console.log('Ao carregar');
  }

  retornaEmail = () =>{
    //get email que esta dentrp do this.state.cpntato.emailo
    let{contado: {email}} = this.state;
    return email;
  }

  render(){
    let{contato:{email}} = this.state;
    
    return(
      ///método de rendenização BIND.
      //<Text>{email}</Text>
      <Text>{this.retornaEmail()}</Text>
    );
  }
}

export default Hello;