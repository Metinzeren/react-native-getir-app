import React from 'react'
import { ScrollView,Image, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from "./styles"
import {Entypo } from "@expo/vector-icons"
const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
        <View style={styles.headerOneView}>
            <Text style={{fontWeight:"bold",fontSize:16,}}>Ev</Text>
            <Text style={{color:"#6E7480",marginRight:1,marginLeft:3}}>Kepez Dokuma Mehmet Akif cd...</Text>
            <Entypo name='chevron-right' size={22} color="#5D3E8D" />
        </View>
        <View style={styles.headerTwo}>
            <Text style={{fontSize:10,fontWeight:"bold",color:"#5d3e8d"}}>TVS</Text>
            <Text style={{fontSize:16,fontWeight:"bold",color:"#5d3e8d"}}>13dk</Text>
        </View>
      </View>
      <View></View>
    </View>
  )
}

export default index
