import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const OfferScreen = () => {
  const offerUrl = 'https://www.autocosmos.com.co/catalogo'; // URL de ejemplo

  const handlePress = () => {
    Linking.openURL(offerUrl);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ofertas y Promociones</Text>
      <Button title="Ver ofertas" onPress={handlePress} />
    </View>
  );
};

export default OfferScreen;


