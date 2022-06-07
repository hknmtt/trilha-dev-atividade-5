import React, { useState } from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable
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

  function imcCalculator(){
    let alturaFormat = altura.replace(",", ".")
    return setImc((peso / (alturaFormat * alturaFormat)).toFixed(2))
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
      return
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha ambos campos")
    
  }

  

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
          <Text style={styles.formLabel}> Altura</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAltura}
            value={altura}
            placeholder="Ex: 1.70"
            keyboardType='numeric' // não esta funcionando
          />

          <Text style={styles.formLabel}> Peso</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
            placeholder="Ex: 70"
            keyboardType= 'numeric' // não esta funcionando
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>

          <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={
            () => validationImc()
          }
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
      </View>

      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </Pressable>
  )
}
