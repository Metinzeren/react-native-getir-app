import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import { Image,Text } from "react-native";
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerTitleAlign: 'center',}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerStyle: { backgroundColor: "#5C3EBC" },
            headerTitle: () => (
              <Image
                resizeMode="contain"
                style={{ width: 70, height: 30 }}
                source={require("../../assets/getirlogo.png")}
              />
            ),
          }}
      />
        <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
            headerTintColor:"#fff",
            headerStyle: { backgroundColor: "#5C3EBC" },
            headerTitle: () => (
             <Text style={{fontSize:16,color:"#fff"}}>Ürünler</Text>
            ),
          }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
