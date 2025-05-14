import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

const logoUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/960px-Instagram_logo.png';

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [tela, setTela] = useState('home');
  const [submenuSair, setSubmenuSair] = useState(false); // 👈 Adicionado aqui

  function TouchMenu() {
    setMenuVisible(!menuVisible);
    setSubmenuSair(false); // Fecha o submenu quando fecha o menu
  }

  function irParaTela(novaTela: string) {
    setTela(novaTela);
    setMenuVisible(false);
    setSubmenuSair(false);
  }

  return (
    <View className="flex-1 bg-stone-950">
      {/* Header */}
      <View className="bg-transparent py-5 px-6 flex-row items-center justify-between">
        <Image source={{ uri: logoUri }} style={{ width: 40, height: 40 }} />
        <TouchableOpacity onPress={TouchMenu}>
          <Text className="text-white text-3xl">☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuVisible && (
        <View className="absolute top-[81px] left-0 bg-black/80 border border-white/10 p-4 z-40 w-80 h-full rounded-br-3xl backdrop-blur-md">
          <TouchableOpacity className="mb-4" onPress={() => irParaTela('home')}>
            <Text className="text-white text-lg">Início</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4" onPress={() => irParaTela('perfil')}>
            <Text className="text-white text-lg">Perfil</Text>
          </TouchableOpacity>
          
          {/* Botão principal de Sair */}
          <TouchableOpacity onPress={() => setSubmenuSair(!submenuSair)}>
            <Text className="text-white text-lg">Sair</Text>
          </TouchableOpacity>

          {/* Submenu de Sair */}
          {submenuSair && (
            <View className="ml-4 mt-2">
              <TouchableOpacity onPress={() => Alert.alert("Você saiu do app!")}>
                <Text className="text-red-400 text-base mb-2">Confirmar saída</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSubmenuSair(false)}>
                <Text className="text-white text-base">Cancelar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      {/* Linha separadora */}
      <View className="h-[1px] bg-white/30 w-full" />

      {/* Conteúdo principal */}
      {tela === 'home' ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
          {/* Scroll horizontal (cards de dados) */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
          >
            {[
              { titulo: 'Total de Vendas', valor: 'R$ 12.340', extra: '+5% hoje' },
              { titulo: 'Produtos', valor: '256 itens', extra: '10 novos' },
              { titulo: 'Clientes', valor: '1.024', extra: '+12 hoje' },
              { titulo: 'Visitas', valor: '3.560', extra: '+32%' },
            ].map((card, index) => (
              <View
                key={index}
                className="w-36 h-36 rounded-3xl mr-4 p-[13px] justify-between items-start bg-white/5 border border-white/10 backdrop-blur-lg"
              >
                <Text className="text-white text-sm font-semibold">{card.titulo}</Text>
                <Text className="text-white text-2xl font-bold">{card.valor}</Text>
                <Text className="text-white/70 text-xs">{card.extra}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Cards centralizados */}
          <View className="items-center">
            {[1, 2, 3].map((_, i) => (
              <View
                key={i}
                className="rounded-3xl border border-white/10 w-72 p-5 items-center bg-white/5 backdrop-blur-lg shadow-xl m-5"
              >
                <Image
                  source={{ uri: 'https://e7.pngegg.com/pngimages/483/759/png-clipart-nike-air-max-nike-free-air-force-shoe-nike-white-outdoor-shoe.png' }}
                  style={{ width: 150, height: 150, borderRadius: 12 }}
                />
                <Text className="text-white text-xl font-semibold mt-4">Tênis Esportivo</Text>
                <Text className="text-white text-base mt-1 text-center">
                  Um tênis confortável e usado para corridas
                </Text>
                <TouchableOpacity className="mt-4 bg-white/90 px-5 py-2 rounded-full">
                  <Text className="text-black font-semibold">Ver mais</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        // Tela de perfil
        <View className="flex-1 items-center justify-center p-6">
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
            style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }}
          />
          <Text className="text-white text-2xl font-bold mb-2">Guilherme</Text>
          <Text className="text-white text-base mb-6">usario@email.com</Text>
          <TouchableOpacity className="bg-white px-6 py-3 rounded-full" onPress={() => Alert.alert('Editar perfil')}>
            <Text className="text-black font-semibold">Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
