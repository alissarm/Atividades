import React from 'react';
import {View, Button, StyleSheet, Text, TextInput} from 'react-native';

export function tela3({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> - Canva - </Text>
      <Text style={styles.texto}>Crie sua conta:</Text>

      <TextInput
      style={styles.input}
      placeholder="Nome"
      />
      <TextInput
      style={styles.input}
      placeholder="E-mail"
      />
      <TextInput
      style={styles.input}
      placeholder="Nova senha"
      />
      <Button onPress={() => navigation.goBack()} title="Enviar" />
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
      fontWeight: 'bold',
      fontSize: 20,
    },
    texto: {
      padding: '1%',
      textAlign: 'center',
    },
    input: {
      marginTop: 17,
      marginBottom: 15,
      padding: 20,
      width: 300,
      backgroundColor: '#d9fcea',
      fontSize: 15,
      fontWeight: 'bold',
      borderRadius: 15,
    },
  });