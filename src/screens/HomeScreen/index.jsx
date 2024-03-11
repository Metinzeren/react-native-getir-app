import React from 'react'
import { ScrollView,Image, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from "./styles"
import {Entypo } from "@expo/vector-icons"
import HeaderMain from "../../components/HeaderMain"
import BannerCarousel from "../../components/BannerCarousel"
import HomeCategories from '../../components/HomeCategories'
const index = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <HeaderMain/>
      <BannerCarousel/>
      <HomeCategories/>
    </ScrollView>
  )
}

export default index
