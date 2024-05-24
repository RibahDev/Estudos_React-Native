import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import Botao from "./src/components/Botao";

export default props => {
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.botao}>
          <Botao label="AC" triplo />
          <Botao label="/" orange/>
          <Botao label="7" />
          <Botao label="8" />
          <Botao label="9" />
          <Botao label="*" orange/>
          <Botao label="4" />
          <Botao label="5" />
          <Botao label="6" />
          <Botao label="-" orange/>
          <Botao label="1" />
          <Botao label="2" />
          <Botao label="3" />
          <Botao label="+" orange/>
          <Botao label="0" duplo />
          <Botao label="." />
          <Botao label="=" orange/>
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

