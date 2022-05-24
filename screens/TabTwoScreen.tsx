import React, { useContext } from 'react';
import {Image, FlatList, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { PedidoContext } from '../contexts/pedidoContext';
import { Productos } from '../modelos/Producto';
import navigation from '../navigation';

export default function TabTwoScreen() {
  const pedidoContext = useContext(PedidoContext);
  const productos = pedidoContext.productos;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Pedidos</Text>
      {
        pedidoContext.productos.length > 0
          ?
          <FlatList data={productos} renderItem={({ item }) =>
            <View>
              
              <col><Image source={{ uri: item.imagenURL }} key={item.id} style={styles.muestra} /></col>
              <col><Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.nombre}>{item.precio}</Text>
              <Text style={styles.nombre}>{item.cantidad}</Text></col>
            </View>
          }>
          </FlatList>
          :
          <View>
          </View>
      }
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nombre:{
    fontSize: 15,
    textalign: 'right'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  muestra: {
    marginTop: 20,
    width: 50,
    height: 50,
    align: 'left',
    borderRadius: 25,
  },
});
