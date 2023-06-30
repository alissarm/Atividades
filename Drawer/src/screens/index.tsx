import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

export function index({ navigation }) {
    return (
      <View style={styles.container}>
      <img style={styles.img} src={'Canva'}></img>
      <Text style={styles.titulo}>Canva</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Saiba mais!"
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
    fontSize: '155%',
    fontWeight: 'bold',
  },
  texto: {
    padding: '5%',
    fontSize: '100%',
    textAlign: 'center',
    textAlign: 'justify',
  },
  img:{
    marginTop: '-8%',
    width: '20%',
    padding: '1.5%',
  },
});

  