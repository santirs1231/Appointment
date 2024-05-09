import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/components/HomeScreen';
import CatalogScreen from './src/components/CatalogScreen';
import SearchScreen from './src/components/SearchScreen';
import AppointmentForm from './src/components/AppointmentForm';
import QuotationScreen from './src/components/QuotationScreen';
import ServiceScreen from './src/components/ServiceScreen';
import OfferScreen from './src/components/OfferScreen';
import ContactScreen from './src/components/ContactScreen';

import FirebaseState from './context/firebase/firebaseState';
import ServicioState from './context/servicios/servicioState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <FirebaseState>
        <ServicioState>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
              <Stack.Screen name="Catalog" component={CatalogScreen} options={{ title: 'Catálogo' }} />
              <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Búsqueda de Vehículo' }} />
              <Stack.Screen name="AppointmentForm" component={AppointmentForm} options={{ title: 'Solicitud de Prueba de Manejo' }} />
              <Stack.Screen name="Quotation" component={QuotationScreen} options={{ title: 'Cotización' }} />
              <Stack.Screen name="Service" component={ServiceScreen} options={{ title: 'Servicio de Taller' }} />
              <Stack.Screen name="Offer" component={OfferScreen} options={{ title: 'Oferta y Promociones' }} />
              <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contacto' }} />

            </Stack.Navigator>
          </NavigationContainer>
        </ServicioState>
      </FirebaseState>
    </PaperProvider>

  );
};

export default App;

