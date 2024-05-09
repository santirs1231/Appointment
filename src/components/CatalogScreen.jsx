import React, { useContext } from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../../context/firebase/firebaseContext';
import ServicioContext from '../../context/servicios/servicioContext';
import { Text } from 'react-native-paper';


const CatalogScreen = () => {
    const {menu, obtenerProducto} = useContext(FirebaseContext)
    return(
        <NativeBaseProvider>
            <ScrollView>
                <View>
                    {menu.map((catalogos)=>{
                        const {modelo, marca, precio, imagen, id} = catalogos
                        return(
                            <View>
                            <Text>{modelo}</Text>
                            <Text>{marca}</Text>
                            <Text>{precio}</Text>
                            <Text>{imagen}</Text>
                            </View>
                            
                        )
                    })}
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}
















// const Vehicle = ({imageUrl, description, price}) => {
//   return(

//       <View>
//           <Image
//           source ={{uri:imageUrl}}
//           style={styles.image}
//           />
//           <Text style={styles.infoCar}>{description}</Text>
//           <Text style={styles.infoCar}>${price}</Text>
          
//       </View>
//   )
// }
// const styles = StyleSheet.create({
//   image:{
//       width:300,
//       height:200,
//       resizeMode: 'contain',
//   },
//   infoCar:{
//       textAlign: 'center',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       textAlignVertical: 'center',
//       fontSize: 15,
     
//   }

// })


// const VehicleList = ({vehicles})=>{
//   return(
//       <ScrollView>
//           {vehicles.map((vehicle)=>(
//               <Vehicle
//               key={vehicle.id}
//               imageUrl={vehicle.imageUrl}
//               description={vehicle.description}
//               price={vehicle.price}
//               />
//           ))}
//       </ScrollView>
//   );
// };

// const CatalogScreen = () => {
//   const vehicles = [
//       {
//           id: 1,
//           imageUrl: "https://i.pinimg.com/originals/c4/49/8e/c4498e0bb9fecf3b0294286928c20a0d.png",
//           description:'Honda Civic, 2025',
//           price: 25000,
//       },
//       {
//           id:2,
//           imageUrl: "https://s3.amazonaws.com/kia-greccomotors/Sportage_blanca_01_9a1ad740c7.png",
//           description: 'Sportage, 2026',
//           price: 75000,
//       },
//       {
//           id:3,
//           imageUrl: "https://cdn.dlron.us/assets/stock/PressKit/Transparent/640/USD10FOT11EA021001.png",
//           description: 'Ford Raptor, 2024',
//           price: 15000,
//       },
//   ];

//   return (
//       <View style={styles.container}>
//           <VehicleList vehicles={vehicles} />
//       </View>
//   );
// };








export default CatalogScreen;

