import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { List } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titulo: 'Headset Gamer',
    descricao: 'Descrição Headset',
    urlImage: 'https://cdn.pixabay.com/photo/2023/03/26/01/16/headphone-7877257_1280.jpg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Mouse Gamer',
    descricao: 'Descrição Mouse',
    urlImage: 'https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_1280.png'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titulo: 'Teclado mecânico',
    descricao: 'Descrição Teclado',
    urlImage: 'https://cdn.pixabay.com/photo/2022/06/11/14/22/keyboard-7256457_1280.png'
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