import{useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export default () => {
  const[n1, setN1] = useState('');
  const[n2, setN2] = useState('');
  const[resultado, setResultado] = useState('');

  function soma() {
    setResultado(Number(n1) + Number(n2));
  }

  function sub() {
    setResultado(Number(n1) - Number(n2));
  }

function divis() {
    setResultado(Number(n1) / Number(n2));
  }

function mult() {
    setResultado(Number(n1) * Number(n2));
  }
  

  return(
    <View>
      <Text>Calculadora</Text>
      <TextInput value={n1} onChangeText={setN1}
        placeholder="Digite um número"/>
      <TextInput value={n2} onChangeText={setN2}
      placeholder="Digite um número"/>
      <Button title="+" onPress={soma} />
      <Button title="-" onPress={sub} />
      <Button title="/" onPress={divis} />
      <Button title="x" onPress={mult} />
      <Text>Resultado: {resultado}</Text>
    </View>
  )
}