import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const QuotationScreen = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState('');

  const calculateTotal = () => {
    const totalPrice = parseFloat(quantity) * parseFloat(price);
    setTotal(totalPrice.toFixed(2));
  };

  return (
    <View >
      <Text>Cotización</Text>
      <TextInput
        placeholder="Producto"
        label="Producto"
        value={product}
        onChangeText={setProduct}
        
      />
      <TextInput
        placeholder="Cantidad"
        label="Cantidad"
        value={quantity}
        onChangeText={setQuantity}
        
      />
      <TextInput
        placeholder="Precio unitario"
        label="Precio unitario"
        value={price}
        onChangeText={setPrice}
        
      />
      <Button title="Calcular Total" onPress={calculateTotal} />
      {total !== '' && (
        <Text>
          Total: ${total}
        </Text>
      )}
    </View>
  );
};

export default QuotationScreen;

