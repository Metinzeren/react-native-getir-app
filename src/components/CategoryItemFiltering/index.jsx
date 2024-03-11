import React, { useState } from "react";
import categoriesGetir from "../../../assets/categoriesGetir";
import { ScrollView, Dimensions, Text, View } from "react-native";
const { height, width } = Dimensions.get("window");

const CategoryBox = ({ item, active }) => {
  
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 9,
        },
        item == active.name && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
        {item}
      </Text>
    </View>
  );
};

const index = ({ category }) => {
  const [categories, setCategories] = useState(categoriesGetir);
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849f7",
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item, index) => (
        <CategoryBox key={index} active={category} item={item.name} />
      ))}
    </ScrollView>
  );
};

export default index;
