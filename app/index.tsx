import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, ScrollView, ActivityIndicator } from 'react-native';
const logoUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/960px-Instagram_logo.png';
interface Tipo{id:Number,title:String,price:Number,description:String,category:String,image:String}


export default function App() {
  const [dado  ,setDados   ] = useState<Tipo[]>([])  
  const [loading,setLoading] = useState(true);

  useEffect(() =>{
    const fetchDados = async () => {
      try {
         
        const reposta = await fetch("https://fakestoreapi.com/products");
        
        const dados = await reposta.json();
        
        
        setDados(dados);
        setLoading(false);

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
  <View className="flex-1 bg-center bg-[url(https://i.pinimg.com/736x/76/11/fc/7611fc5a1989e4f9238501680cddeb1a.jpg)] bg-no-repeat bg-cover">


    {/* Header */}
    <View className="bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-5 py-2 px-5 flex-row items-center justify-between">
      <Image source={{ uri: logoUri }} style={{ width: 40, height: 40 }} />
      <TouchableOpacity>
        <Text className="text-white text-3xl">☰</Text>
      </TouchableOpacity>
    </View>
    {/* Linha separadora */}
    <View className="h-[1px] bg-white/[60%] w-full" />

     
    <ScrollView>

    {dado.map((item,index) => (
      <View key={index} className='rounded-3xl border border-white/10 w-72 p-5 items-center bg-white/5 backdrop-blur-lg shadow-xl m-5'>
        <Image className='bg-cover bg-center' source={{uri:item.image}} style={{ width: 150, height: 150, borderRadius: 12 }}/>
        <Text className="text-white text-base font-semibold mt-4">{item.title}</Text>
        <Text className="text-white text-base mt-1 text-center">R$ {item.price}</Text>
        <Text className="text-white text-base mt-1 text-center">{item.category}</Text>
       <TouchableOpacity className="mt-4 bg-white/90 px-5 py-2 rounded-full">
        <Text className="text-black font-semibold">Ver mais</Text>
      </TouchableOpacity>
      </View> 
    ))}
    </ScrollView>
  </View>
  );
}
  