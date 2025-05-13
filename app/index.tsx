import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

const logoUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/960px-Instagram_logo.png';

export default function App() {

  const [menuVisible, setMenuVisible] = useState(false)

  function TouchMenu(){
    setMenuVisible(!menuVisible);
  }


  return (
    <View className="flex-1 bg-stone-950">
      {/* Header */}

      <View className="bg-transparent py-5 px-6 flex-row items-center justify-between">
        <Image
          source={{ uri: logoUri }}
          style={{ width: 40, height: 40 }}
        />
        <TouchableOpacity onPress={TouchMenu}>
          <Text className="text-white text-3xl">☰</Text>
        </TouchableOpacity>
        
      </View>
      {menuVisible && (
        <View className="absolute top-20 bg-black border border-white/20 p-4 z-40 w-80 h-[100%]">
          <TouchableOpacity className="mb-2" onPress={() => Alert.alert("Início")}>
            <Text className="text-white text-lg">Início</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-2" onPress={() => Alert.alert("Perfil")}>
            <Text className="text-white text-lg">Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Sair")}>
            <Text className="text-white text-lg">Sair</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Linha separação */}
      <View className="h-[1px] bg-white/30 w-full" />

      {/* Scroll principal */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Scroll horizontal (dados) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
        >
          {/* Vendas */}
          <View className="w-36 h-36 rounded-3xl mr-4 p-[13px] justify-between items-start bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl">
            <Text className="text-white text-sm font-semibold">Total de Vendas</Text>
            <Text className="text-white text-2xl font-bold">R$ 12.340</Text>
            <Text className="text-white/70 text-xs">+5% hoje</Text>
          </View>

          {/* Produtos */}
          <View className="w-36 h-36 rounded-3xl mr-4 p-[13px] justify-between items-start bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl">
            <Text className="text-white text-sm font-semibold">Produtos</Text>
            <Text className="text-white text-2xl font-bold">256 itens</Text>
            <Text className="text-white/70 text-xs">10 novos</Text>
          </View>

          {/* Clientes */}
          <View className="w-36 h-36 rounded-3xl mr-4 p-[13px] justify-between items-start bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl">
            <Text className="text-white text-sm font-semibold">Clientes</Text>
            <Text className="text-white text-2xl font-bold">1.024</Text>
            <Text className="text-white/70 text-xs">+12 hoje</Text>
          </View>

          {/* Visitas */}
          <View className="w-36 h-36 rounded-3xl mr-4 p-[13px] justify-between items-start bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl">
            <Text className="text-white text-sm font-semibold">Visitas</Text>
            <Text className="text-white text-2xl font-bold">3.560</Text>
            <Text className="text-white/70 text-xs">+32%</Text>
          </View>
        </ScrollView>

        {/* Cards centralizados */}
        <View className="items-center">
          {/* card 1 */}
          <View className="rounded-3xl border border-white/20 w-72 p-5 items-center bg-gradient-to-br from-white/10 to-white/5 shadow-2xl m-5">
            <Image
              source={{ uri: 'https://e7.pngegg.com/pngimages/483/759/png-clipart-nike-air-max-nike-free-air-force-shoe-nike-white-outdoor-shoe.png' }}
              style={{ width: 150, height: 150, borderRadius: 12 }}
            />
            <Text className="text-white text-xl font-semibold mt-4">Tênis Esportivo</Text>
            <Text className="text-white text-base mt-1">um tenis confortavel e usado para corridas</Text>

            <TouchableOpacity className="mt-4 bg-white/90 px-5 py-2 rounded-full">
              <Text className="text-black font-semibold">Ver mais</Text>
            </TouchableOpacity>
          </View>

          {/* card 2 */}
          <View className="rounded-3xl border border-white/20 w-72 p-5 items-center bg-gradient-to-br from-white/10 to-white/5 shadow-2xl m-5">
            <Image
              source={{ uri: 'https://e7.pngegg.com/pngimages/483/759/png-clipart-nike-air-max-nike-free-air-force-shoe-nike-white-outdoor-shoe.png' }}
              style={{ width: 150, height: 150, borderRadius: 12 }}
            />
            <Text className="text-white text-xl font-semibold mt-4">Tênis Esportivo</Text>
            <Text className="text-white text-base mt-1">um tenis confortavel e usado para corridas</Text>

            <TouchableOpacity className="mt-4 bg-white/90 px-5 py-2 rounded-full">
              <Text className="text-black font-semibold">Ver mais</Text>
            </TouchableOpacity>
          </View>

          {/* card 3 */}
          <View className="rounded-3xl border border-white/20 w-72 p-5 items-center bg-gradient-to-br from-white/10 to-white/5 shadow-2xl m-5">
            <Image
              source={{ uri: 'https://e7.pngegg.com/pngimages/483/759/png-clipart-nike-air-max-nike-free-air-force-shoe-nike-white-outdoor-shoe.png' }}
              style={{ width: 150, height: 150, borderRadius: 12 }}
            />
            <Text className="text-white text-xl font-semibold mt-4">Tênis Esportivo</Text>
            <Text className="text-white text-base mt-1">um tenis confortavel e usado para corridas</Text>

            <TouchableOpacity className="mt-4 bg-white/90 px-5 py-2 rounded-full">
              <Text className="text-black font-semibold">Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
