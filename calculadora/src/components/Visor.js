import { View, Text, StyleSheet } from "react-native"

export default props => {
    return (
        <View style={styles.visor}>
            <Text style={styles.valorVisor}>{props.valor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    visor:{
        flex:1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    valorVisor:{
        fontSize: 60,
        color: '#ffff'
    }
})