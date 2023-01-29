import React, { useState } from "react"
import { View, TextInput, Text, TouchableOpacity } from "react-native"
import ResultImc from "./ResultImc"
import styles from "./style"

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("calcular")

function imcCalculator(){
    return setImc((weight / (height*height)).toFixed(2))
}

function validationImc(){
    if(height != null && weight != null){
        imcCalculator();
        setHeight(null)
        setWeight(null)
        setMessageImc("seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("calcular")
    setMessageImc("preencha o peso e altura")
}
    
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura: </Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    //keyboardType="numeric"
                    style={styles.input}
                ></TextInput>

                <Text style={styles.formLabel}>Peso: </Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 73"
                    //keyboardType="numeric"
                    style={styles.input}
                ></TextInput>
                <View style={{
                    width: '100%',
                    height: 'auto',
                    alignItems: "center",
                }}>
                    <TouchableOpacity
                        onPress={() => validationImc()}
                        title="Calcular IMC"
                        style={styles.buttonCalculator}
                    >
                        <Text style={styles.textButtonCalculator}
                        >
                            {textButton}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
        </View>
    )
}