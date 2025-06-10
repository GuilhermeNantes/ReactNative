import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, Image, ScrollView, ActivityIndicator } from 'react-native';
const logoUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/960px-Instagram_logo.png';
const backgroundLocalImage = require("./img/Novo Projeto.png")

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
    <View className="bg-slate-600">
        {/* Header */}
        <View className="bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-5 py-2 px-5 flex-row items-center justify-between">
          <Image source={{ uri: logoUri }} style={{ width: 140, height: 40 }} />
          <TouchableOpacity>
            <Text className="text-white text-3xl">☰</Text>
          </TouchableOpacity>
        </View>



        
        {/* <Image
          source={backgroundLocalImage}
          className=""
        /> */}
    </View>
  )
};