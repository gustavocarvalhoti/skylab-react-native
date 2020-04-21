import React from 'react';
import {WebView} from 'react-native-webview';
import {Text} from 'react-native';

const Product = ({navigation}) => {
    // Não funcionou
    //return <WebView source={{uri: navigation.state.params.url}}/>;
    return <Text>{navigation.state.params.url}</Text>;
};

Product.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
});

export default Product;
