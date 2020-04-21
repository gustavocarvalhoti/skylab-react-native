import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Product({navigation, route}) {
    navigation.setOptions({headerTitle: 'Colaborador'});

    const item = route.params;

    return (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <View style={styles.box}>
                <TouchableOpacity
                    style={styles.change}
                    onPress={() => {
                    }}>
                    <Text style={styles.productButtonText}>Alterar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.remove}
                    onPress={() => {
                    }}>
                    <Text style={styles.productButtonText}>Remover</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, /*Ocupa a tela toda*/
        backgroundColor: '#FAFAFA',
    },

    list: {
        padding: 20,
    },

    productContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 10,
    },

    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24,
    },

    change: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    remove: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    productButtonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold',
    },

    box: {
    }
});
