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
  const temas = ["acitio"]
  const[date,setDate] = useState()
  const[response,setResponse] = useState()
  const[loading,setLoading] = useState(true)
  useEffect(() =>{

    const fetchDados = async () => {
      try {
        const res = await fetch("https://api.sampleapis.com/movies/animation");
        const data = await res.json();
        setDate(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDados()
  
  },[]);
  console.log(date)

  return (
    <View></View>
  );
}
