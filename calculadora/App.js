import { SafeAreaView, Text, StyleSheet, View } from "react-native";

import Botao from "./src/components/Botao";
import Visor from "./src/components/Visor";
import { useState } from "react";

const estadoInicial = {
  valorVisor: "0",
  limparVisor: false,
  operacao: null,
  valores: [0, 0],
  posicaoCorrente: 0
}

let estadoTemp = {
  valorVisor: "0",
  limparVisor: false,
  operacao: null,
  valores: [0, 0],
  posicaoCorrente: 0
}

export default props => {

    const [estadoCalculadora, setEstadoCalculadora] = useState({...estadoInicial})

    adicionarDigito = n => {
      if(n === '.' && estadoCalculadora.valorVisor.includes('.')){
        return;
      }

      const limparVisor = estadoCalculadora.valorVisor === '0' || estadoCalculadora.limparVisor
      const valorCorrente = limparVisor ? '' : estadoCalculadora.valorVisor
      const valorVisor = valorCorrente + n

      estadoTemp = {...estadoCalculadora, valorVisor, limparVisor: false}
      setEstadoCalculadora({...estadoTemp})
    }

    limparMemoria = () => {
      console.log("Limpar memória")
    }

    setOperacao = operacao => {
      console.warn(operacao)
    }

    return(
      <SafeAreaView style={styles.container}>
        <Visor valor={estadoCalculadora.valorVisor} />
        <View style={styles.botao}>
          <Botao label="AC" triplo onClick={limparMemoria} />
          <Botao label="/" orange onClick={setOperacao} />
          <Botao label="7" onClick={adicionarDigito} />
          <Botao label="8" onClick={adicionarDigito}/>
          <Botao label="9" onClick={adicionarDigito}/>
          <Botao label="*" onClick={setOperacao} orange/>
          <Botao label="4" onClick={adicionarDigito}/>
          <Botao label="5" onClick={adicionarDigito}/>
          <Botao label="6" onClick={adicionarDigito}/>
          <Botao label="-" onclick={setOperacao} orange/>
          <Botao label="1" onClick={adicionarDigito}/>
          <Botao label="2" onClick={adicionarDigito}/>
          <Botao label="3" onClick={adicionarDigito}/>
          <Botao label="+" onClick={setOperacao} orange/>
          <Botao label="0" onClick={adicionarDigito} duplo />
          <Botao label="." onClick={setOperacao}/>
          <Botao label="=" onClick={setOperacao}orange/>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#515151",
    justifyContent: "flex-end"
    
  },
  botao:{
    flexDirection: "row",
    flexWrap: "wrap"
  }
})

