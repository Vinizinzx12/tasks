import React, {Component} from "react"
import {StyleSheet, View, Text } from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'

export default props =>{
    return(
      <View style={StyleSheet.container}>
        <Text>Descrição da tarefas</Text>
        <Text>Data estimada conclusão</Text>
        <Text>Data conclusão</Text>
      </View>
    )
}

const styles = StyleSheet.create({
     container:{
        bordercolor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
     },
     desc: {
        fontFamily: 'Arial',
        fontSize: 20
     },
     date:{
        fontFamily: 'Arial'
     }

})