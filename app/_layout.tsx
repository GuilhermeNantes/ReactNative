import { Stack } from "expo-router";
import './globals.css';
import { Header } from "react-native/Libraries/NewAppScreen";
export default function RootLayout() {
  return <Stack screenOptions={{headerShown:false}}/>;
}

      //   {/* Navegação */}
      //   <View className="flex-row space-x-12">
      //     <Text className="text-white text-sm">Início</Text>
      //     <Text className="text-white text-sm">Séries</Text>
      //     <Text className="text-white text-sm">Filmes</Text>
      //     <Text className="text-white text-sm">Minha Lista</Text>
      //   </View>

      //   {/* Ícones */}
      //   <View className="flex-row space-x-3">
      //     <TouchableOpacity>
      //       <Text className="text-white text-lg">🔍</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity>
      //       <Text className="text-white text-lg">👤</Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>
