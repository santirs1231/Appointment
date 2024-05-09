import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ServiceScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');

  const services = [
    { id: 1, name: 'Cambio de aceite' },
    { id: 2, name: 'Revisión de frenos' },
    { id: 3, name: 'Cambio de neumáticos' },
    { id: 4, name: 'Alineación y balanceo' },
    { id: 5, name: 'Reparación de motor' },
  ];

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Service:', service);
    navigation.navigate('Home');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Servicio de Taller</Text>
        <FlatList
          data={services}
          renderItem={({ item }) => <Text style={styles.serviceName}>{item.name}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.formContainer}>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder='Ingrese tu nombre' 
            style={styles.input}
          />
          <TextInput
            value={date}
            onChangeText={setDate}
            placeholder='Ingrese la fecha'
            style={styles.input}
          />
          <TextInput
            value={time}
            onChangeText={setTime}
            placeholder='Ingrese la hora'
            style={styles.input}
          />
          <TextInput
            value={service}
            onChangeText={setService}
            placeholder='Ingrese el servicio'
            style={styles.input}
          />
            
      
      onPress={()=>navigation.navigate('Menu')}  
      
        <Text >
        Crear una orden</Text>
      
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  serviceName: {
    fontSize: 18,
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default ServiceScreen;









