import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { List } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titulo: 'Primeiro Item',
    descricao: 'Descrição do Primeiro Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Segundo Item',
    descricao: 'Descrição do Segundo Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titulo: 'Terceiro Item',
    descricao: 'Descrição do Terceiro Item'
  }
];

const Item = ({ elemento: item }) => (
  <List.Item
    title={item.titulo}
    description={item.descricao}
    // left={props => <List.Icon {...props} icon="folder" />}
    left={props => <Image {...props}
      style={styles.tinyLogo}
      source={
        { uri: 'https://cdn.pixabay.com/photo/2024/07/17/10/25/ocean-8901157_1280.jpg' }
      }
    />}
    />
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item elemento={item} />}
        keyExtractor={item => item.id}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;