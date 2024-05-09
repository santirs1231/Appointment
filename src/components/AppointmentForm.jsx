import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Provider as PaperProvider } from 'react-native-paper';

const AppointmentForm = () => {
    const navigation = useNavigation();

    const [codig, setCodig] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [telephone, setTelephone] = useState('');
    
    const handleSubmit = () => {
        
        console.log('Codig:', codig);
        console.log('Date:', date);
        console.log('Name:', name);
        console.log('Surname:', surname);
        console.log('Telephone:', telephone);

        
        navigation.navigate('Home');
    };

    return (
        <PaperProvider>
            <View>
                <Text>Codigo de vehiculo: </Text>
                <TextInput
                    value={codig}
                    onChangeText={setCodig}
                    label='Ingrese codigo'
                />

                <Text>Name: </Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    label='Nombre'
                />

                <Text>surname: </Text>
                <TextInput
                    value={surname}
                    onChangeText={setSurname}
                    label='Ingrese la hora'
                />

                <Text>telephone: </Text>
                <TextInput
                    value={telephone}
                    onChangeText={setTelephone}
                    label='Ingrese telefono'
                />

                 <Text>date: </Text>
                <TextInput
                    value={date}
                    onChangeText={setDate}
                    label='Ingrese fecha'
                />

                <Button onPress={handleSubmit} title="Send">Enviar</Button>
            </View>
        </PaperProvider>
    );
};

export default AppointmentForm;

const Drive = () => {

    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    const handlePress = () => {
        Alert.alert(
            'Mensaje',
            '¡Botón presionado!',
            [{ text: 'Aceptar', onPress: () => console.log('Aceptar presionado') }]
        );
    };


    return (
        <SafeAreaView>
            <Text style={styles.title}>
                Solicitud de Prueba de Manejo
            </Text>


            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Codigo de Vehiculo'
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Nombre'
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Apellido'
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Telefono"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Fecha'
            />


            <View>
                <Button title="Solicitar" onPress={handlePress} />
            </View>


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginHorizontal: 50,
        borderWidth: 2,
        padding: 10,
        textAlign: "center",
        borderRadius: 40,
        color: '#0000',
        borderColor: 'black'
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
    }
});





