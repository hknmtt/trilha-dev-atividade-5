import React, { useState } from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable,
    FlatList
   } from "react-native"
import ResultImc from "./ResultImc/"
import styles from "./style"

export default function Form() {

  const [peso, setPeso] = useState(null)
  const [altura, setAltura] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha os campos")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])

  function imcCalculator(){
    let alturaFormat = altura.replace(",", ".")
    let totalImc = ((peso / (alturaFormat * alturaFormat)).toFixed(2))
    setImcList ((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
    setImc(totalImc)
  }

  function verificationImc(){
    if(imc == null){
      setErrorMessage("campos obrigatório*")
      Vibration.vibrate(200)
    }
  }
  
  function validationImc(){
    if (peso != null && altura != null){
      imcCalculator()
      setPeso(null)
      setAltura(null)
      setMessageImc("Seu imc é igual a: ")
      setTextButton("Calcular Novamente")
      setErrorMessage(null)
    } else {
      verificationImc()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha ambos campos")
    } 
  }

  

  return (
    
      <View style={styles.formContext}>
        {imc == null ? 
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          
          <Text style={styles.formLabel}> Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAltura}
            value={altura}
            placeholder="Ex: 1.70"
            keyboardType='numeric' // não esta funcionando
          />

          <Text style={styles.formLabel}> Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
            placeholder="Ex: 70"
            keyboardType= 'numeric' // não esta funcionando
          />
          

          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => {validationImc()}}
          >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
        : 
        <View style={styles.exhibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={
              () => validationImc()
            }
            >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
        }
        <FlatList
        style={styles.listImcs}
        showsVerticalScrollIndicator={false}
        data={imcList.reverse()}
        renderItem={({item}) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado IMC: </Text>
              {item.imc}
            </Text>
          )
        }}
        keyExtractor={(item) => item.id}
        />
    </View>
  )
}
