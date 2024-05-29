import { Text, TouchableHighlight, View, StyleSheet, Dimensions } from "react-native";

// Dimensions- captura a dimensão da tela e devolve como uma constante
const{width, height} = Dimensions.get("window");

export default props => {
    // Faz o mesmo papel de class em CSS
    const estilosBotao = [styles.botao]
    if(props.duplo) estilosBotao.push(styles.botaoDuplo)
    if(props.triplo) estilosBotao.push(styles.botaoTriplo)
    if(props.orange) estilosBotao.push(styles.botaoLaranja)
    
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={estilosBotao}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    botao: {
        fontSize: 40,
        width: width / 4,
        height: width / 4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth:1,
        borderColor: "#888"
    },
    botaoDuplo:{
      width: width / 4 * 2
    },
    botaoTriplo:{
      width: width / 4 * 3
    },
    botaoLaranja:{
        backgroundColor: "#ff6400",
        color: "#ffff" 
    }
})