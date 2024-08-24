
// React
import React from 'react';

// React Native
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
} from 'react-native';

// React Native Paper
import {
    List
} from 'react-native-paper';

import Produtos from './data/Produtos'

// Function to read title
const Item = ({elemento: item}) => {
    return(   
    <List.Item
        title={item.titulo}
        description={item.descricao}
        // left={props => <List.Icon {...props} icon="folder" />}
        left={props => 
            <Image {...props} 
                style={styles.tinyLogo} 
                source={
                    {
                        uri: item.urlImagem
                    }
                }/>}
    />
)};

// App
const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ Produtos }
                renderItem={({ item }) =><Item elemento={ item } /> }
                keyExtractor={ item => item.id }
            />
        </SafeAreaView>
    );
};

// Style
const styles = StyleSheet.create({
    container: {
        flex:      1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding:          20,
        marginVertical:   8,
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

// Export
export default App;
