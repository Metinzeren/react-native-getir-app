import React, { useState } from "react";
import categoriesGetir from "../../../assets/categories";
import CategoriesItem from "../CategoriesItem";
import { View,StyleSheet } from "react-native";
const index = () => {
  const [categories, setCategories] = useState(categoriesGetir);
  return (
    <View style={{ backgroundColor: "#F5F5F5" }}>
      <View style={styles.listContainer}>
        {categories.map((item, index) => (
          <CategoriesItem key={index} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        flexDirection: "row",
        alignItems:"center",
        flexWrap:"wrap",
        width:"100%"
    }
})
export default index;
