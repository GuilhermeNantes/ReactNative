import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function home() {
  const[date,setDate] = useState()
  const[response,setResponse] = useState()

  useEffect(() =>{

    const fetchDados = async () => {

      const dateJson = await fetch("https://fakestoreapi.com/products")
      
      const convesion = await dateJson.json()

      setDate(convesion)
    }

    fetchDados()
  
  },[]);
  console.log(date)


  return (
    <View></View>
  );
}
