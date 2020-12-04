/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  ToastAndroid,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HeaderCreated from './android/app/src/main/components/HeaderCreated';


//import { Appbar } from 'react-native-paper';

const App: () => React$Node = () => {

  const abreToast = () => {
    ToastAndroid.show('Efetuando pagamento ...', ToastAndroid.LONG);
  };

  return (
    <View style={styles.container}>
    <HeaderCreated></HeaderCreated>
    <Text style={{ textAlign: "center", fontSize: 20}}>Endereço de Entrega</Text>
    <TextInput style={{ height: 40, 
                        borderColor: "black", 
                        borderWidth: 1, 
                        borderRadius: 10}}
                        placeholder="Rua Pioneiro Paschoal Locatelli Nº 25 B 05 Ap 35 - Mga">
                          Rua Pioneiro Paschoal Locatelli Nº 25 B 05 Ap 35 - Mga</TextInput>


    <Text style={{ textAlign: "center", fontSize: 20}}>Tempo de Entrega</Text>
    <View style={{alignItems: "center"}}>
      <Text style={{ textAlign: "center", 
                      fontSize: 20, 
                      borderWidth: 2, 
                      borderColor: "black", 
                      width: 100,
                      borderRadius: 10,
                      backgroundColor: "#1DD"}}>
                        1 Dia</Text>
    </View>

    <Text style={{ textAlign: "center", fontSize: 20}}>Modalidade da Entrega</Text>
    <View style={{ alignItems: "center"}}>
      <Text style={{ textAlign: "center", 
                      fontSize: 20, 
                      borderWidth: 2, 
                      borderColor: "black", 
                      width: 300,
                      borderRadius: 10}}>
                        Entrega expressa           <Text style={{ fontSize: 15, color: "#1BB"}}>Selecionar</Text></Text>
    </View>
   
    <Text style={{ textAlign: "center", fontSize: 20}}>Itens do Pedido</Text>
    <View style={{ alignItems: "center"}}>
      <Text style={{ textAlign: "center", 
                      fontSize: 20, 
                      borderWidth: 2, 
                      borderColor: "black", 
                      width: "100%"}}>
                        1 Adaptador Wifi TP-Link    R$49,90   <Text style={{ fontSize: 15, color: "#1BB", fontSize: 20}}>+</Text></Text>
                        
    </View>
    <View style={{ alignItems: "center"}}>
      <Text style={{ textAlign: "center", 
                      fontSize: 20, 
                      borderWidth: 2, 
                      borderColor: "black", 
                      width: "100%"}}>
                        1 Gabinete G Riotoro         R$299,90   <Text style={{ fontSize: 15, color: "#1BB", fontSize: 20}}>+</Text></Text>
                        
    </View>
    <View style={{ alignItems: "center"}}>
      <Text style={{ textAlign: "center", 
                      fontSize: 20, 
                      borderWidth: 2, 
                      borderColor: "black", 
                      width: "100%"}}>
                        1 Fonte 650w EVGA           R$490,90   <Text style={{ fontSize: 15, color: "#1BB", fontSize: 20}}>+</Text></Text>
                        
    </View>
    <View style={{ alignItems: "center"}}>
      <Text style={{ textAlign: "center", 
                      fontSize: 20, 
                      borderWidth: 2, 
                      borderColor: "black", 
                      width: "100%"}}>
                        1 Kit Fan 3und Corsair      R$190,90   <Text style={{ fontSize: 15, color: "#1BB", fontSize: 20}}>+</Text></Text>
                        
    </View>
    <View style={{ alignItems: "center"}}>
      <Text style={{ textAlign: "center", 
                      fontSize: 20, 
                      borderWidth: 2, 
                      borderColor: "black", 
                      width: "100%"}}>
                        1 SSD 256gb Kingston      R$280,90   <Text style={{ fontSize: 15, color: "#1BB", fontSize: 20}}>+</Text></Text>
                        
    </View>

    
    <Text style={{ textAlign: "center", fontSize: 20}}>Valor do Pedido</Text>
    <Text style={{ textAlign: "center", 
                      fontSize: 15, 
                      borderWidth: 2, 
                      borderColor: "black", 
                      borderRadius: 10,
                      backgroundColor: "#1DD",
                      fontWeight: "bold"}}>
                        Subtotal: R$1.312,50 Taxa de Entrega: R$70,00 Desconto: R$138,25 Total: R$1,244,25</Text>

    <Text style={{ textAlign: "center", fontSize: 20}}>Forma de Pagamento</Text>
    <View style={{ alignItems: "center", marginBottom: 10}}>
      <Text style={{ textAlign: "center", 
                      fontSize: 20, 
                      borderWidth: 2, 
                      borderColor: "black", 
                      width: 300,
                      borderRadius: 10}}>
                        Crédito a vista                 <Text style={{ fontSize: 15, color: "#1BB"}}>Selecionar</Text></Text>
    </View>
    <Button onPress={abreToast} title="Realizar Pagamento" color="#1DD"/>
    
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
