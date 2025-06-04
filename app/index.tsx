import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, Image, ScrollView, ActivityIndicator } from 'react-native';

export default function app(){
  const [Elements,SetElements] = useState();
  const [Search, SetSearch] = useState()
  useEffect(() =>{
    const FetchData = async () => {
      try{
        const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=spider-man`)
        const information = await response.json()
        
        SetElements(information.description || [])
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }
    FetchData()
  },[])
  return(
    <View>
      
    </View>
  )
};