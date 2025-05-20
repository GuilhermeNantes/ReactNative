import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, ScrollView, ActivityIndicator } from 'react-native';

interface Tipo{id:Number,title:String,price:Number,description:String,category:String,imaga:String}


export default function App() {
  const [dado  ,setDados   ] = useState<Tipo[]>([])  
  const [loading,setLoading] = useState(true);

  useEffect(() =>{
    const fetchDados = async () => {
      try {
         
        const reposta = await fetch("https://fakestoreapi.com/products");
        
        const dados = await reposta.json();
        
        
        setDados(dados);
        setLoading(true);

      } catch(error){
      }
    }
  
    fetchDados();
  },[]);
  

  if(loading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size="large" color="#FF0000"/>
      </View>
    );
  }
  return (
    <View className='flex-1 p-5'>
      <Text className='font-xl text-black'>sdfsfsdf</Text>
      {dado.map((item:any) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
    </View>
  );
}
  