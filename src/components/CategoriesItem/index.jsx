import React from 'react'
import { View, Text ,TouchableOpacity,Image,Dimensions } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const index = ({item}) => {
    const {width ,height } = Dimensions.get('window')
     const navigation = useNavigation()
  return (
    <TouchableOpacity testID="category-item" onPress={()=> navigation.navigate("CategoryDetails",{category:item})} style={{width:width*0.25,height:width*0.24,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:10}} >
      <Image source={{uri:item.src}} style={{width:width*0.18,height:width*0.18,borderRadius:10}} />
      <Text style={{fontSize:12,color:'#616161',fontWeight:'500'}}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default index
