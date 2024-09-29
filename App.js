import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[input,setInput] = useState('')
  const[result,setResult] = useState('')

  const onButtonPress=(value) =>{
    if(value == '='){
      try{
        setResult(eval(input))
      } catch(error){
        setResult('')
        Alert.alert(
          "Invalid format used!",
          " ",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }
    }
    else if(value == 'C'){
      setInput('')
      setResult('')
    }
    else if(value == '⌫'){
      setInput(input.slice(0 , -1))
      setResult(input)
    }
   
 else{
      setInput(input + value)
    }
    }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultcontainer}>
        <Text style={styles.resultText}>
          {result}
        </Text>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.inputText}
        value={input}
        onChangeText={setInput}
        keyboardType='numeric'
        />
        <View style={styles.buttonContainer}>
          {['C','%','⌫','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','.','='].map(
            (item,index) => (
              <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={()=> onButtonPress(item)}>
              <Text style={styles.buttontext}>{item}</Text>
              </TouchableOpacity>
            )
            )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultcontainer:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText:{
    fontSize:70,
    bottom:'30%',
    fontWeight:'bold',
  },
  inputcontainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputText:{
  fontSize: 70,
  bottom:'70%',
  fontWeight:'bold',

  },
  buttonContainer:{
    top:'-50%',
    flexDirection:'row',
    flexWrap:'wrap',
    
  },
  button:{
  fontSize:25,
  width:'25%',
  height:'30%',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth:1,
  borderColor:'#ccc',
  },

  buttontext:{
    fontSize:30,
    color:'green',
    fontWeight:'900',
  }

});
