import React, {Component} from "react"
import {StyleSheet, View, Text,TouchableWithoutFeedback } from "react-native"
import { Icon } from "react-native-vector-icons/FontAwesome6"
import moment from "moment"
import 'moment/locale/pt-br'

export default props =>{
    return(
      <View style={StyleSheet.container}>
      <TouchableWithoutFeedback>
      <View>
         <Icon name="check" size={20}></Icon>
      </View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={styles.desc}>{props.description}Descrição da tarefas</Text>
        <Text style={styles.date}>{props.estimate_at}Data estimada conclusão</Text>
        <Text style={styles.date}>{props.done_at}Data conclusão</Text>
      </View>
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
     },
     checkContainer:{
        width: "20%",
        alignContent: "center",
        justifyContent: "center"
     },
     done:{
      height: 25,
      width: 25,
      borderRadius:13,
      borderWidth: 1,
      backgroundColor: "#4D7031",
      alignItems: "center",
      justifyContent: "center"
 }
})