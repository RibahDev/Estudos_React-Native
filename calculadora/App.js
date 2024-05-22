import { SafeAreaView, Text, StyleSheet } from "react-native";
import Botao from "./src/components/Botao";

export default props => {
    return(
      <SafeAreaView style={styles.container}>
        <Botao />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f5fcff",
    justifyContent: "center",
    alignItems: "center"
  }
})

