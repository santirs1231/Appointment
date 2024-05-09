import React from 'react'
import { Image, SafeAreaView, Alert, StyleSheet, View, Button } from 'react-native'
import { Text } from 'react-native-paper';

const ContactScreen = () => {

    const handlePress = () => {
        Alert.alert(
            'Mensaje',
            '¡Contactando!',
            [{ text: 'Aceptar', onPress: () => console.log('Aceptar presionado') }]
        );
    };

    return (
        <SafeAreaView>

            <View style={styles.container}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png' }} style={styles.image} />
            </View>

            <View>
                <Text style={styles.info}>Vendedor 1:</Text>
                <Text style={styles.info}> E-mail:</Text>
                <Text style={styles.info}>Asesor Vehicular</Text>
                <Text style={styles.info}>Telefono:</Text>
            </View>
            
          
            <View style={styles.buttonContainer}>
                <Button title="Contactar" onPress={handlePress} />
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 200,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    info: {
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        color: 'black',
    },

    buttonContainer: {
        marginTop: 20,
      },
}
);

export default ContactScreen;
