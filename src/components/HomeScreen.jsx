import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => navigation.navigate('Catalog')}>
          Catálogo
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Search')}>
          Búsqueda de Vehículo
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('AppointmentForm')}>
          Solicitud de Prueba de Manejo
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Quotation')}>
          Cotización
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Service')}>
          Servicio de Taller
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Offer')}>
          Oferta y Promociones
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Contact')}>
          Contacto
        </Button>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default HomeScreen;
