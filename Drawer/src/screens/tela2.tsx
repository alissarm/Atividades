import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

export function tela2({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
      <Text style={styles.titulo}>Sobre o Canva</Text>
      <Text style={styles.texto}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{'\n'}
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into{'\n'}
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, {'\n'}
      and more recently with desktop publishing softwar like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      <Button onPress={() => navigation.navigate('Template')} title="Crie sua conta" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: '155%',
    textAlign: 'center',
  },
texto: {
  padding: '5%',
  fontSize: '100%',
  textAlign: 'center',
},

});