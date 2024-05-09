import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';

const SearchScreen = () => {
    const [codigoVehiculo, setCodigoVehiculo] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');

    const handlePress = () => {
        Alert.alert(
            'Mensaje',
            '¡Buscando vehículo!',
            [{ text: 'Aceptar', onPress: () => console.log('Aceptar presionado') }]
        );
    };

    return (
        <SafeAreaView>
            <Text style={styles.title}>
                Búsqueda de vehículo
            </Text>

            <TextInput
                style={styles.input}
                onChangeText={setCodigoVehiculo}
                value={codigoVehiculo}
                placeholder='Código de Vehículo'
            />

            <TextInput
                style={styles.input}
                onChangeText={setMarca}
                value={marca}
                placeholder='Marca'
            />

            <TextInput
                style={styles.input}
                onChangeText={setModelo}
                value={modelo}
                placeholder='Modelo'
            />

            <View>
                <Button title="Buscar" onPress={handlePress} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginHorizontal: 50,
        borderWidth: 2,
        padding: 10,
        textAlign: "center",
        borderRadius: 40,
        color: 'black',
        borderColor: 'black'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
    }
});

export default SearchScreen;

