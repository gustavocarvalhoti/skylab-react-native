import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import api from "../src/services/api";

export default function Product({navigation, route}) {
    navigation.setOptions({headerTitle: 'Colaborador'});

    const item = route.params;

    return (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.identification_code}</Text>
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
                        const id = item._id;
                        api.delete(`/employee/${id}`);
                        console.log("removendo -> " + id);
                        navigation.navigate('Root', {props: id});
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

    box: {}
});
