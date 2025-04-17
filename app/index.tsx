import { Text, TouchableOpacity, View } from "react-native";
import { Image } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-[#151318] ">
        <View className="p-8 justify-center items-center bg-slate-950 rounded-md">

          <Image source={{ uri: "https://avatars.githubusercontent.com/u/173521809?v=4" }} className="shadow-xl shadow-red-600 h-64 w-64 border-4 border-red-500 rounded-full m-7 "/>
          <Text className="text-5xl mb-4 text-red-500 font-bold">Dark Lords</Text>
          <Text className="text-2xl text-white mb-4 ">idade 17 anos</Text>
          <Text className="text-2xl text-white mb-4 ">Localização: mato grosso do sul</Text>
          <Text className="text-2xl text-white mb-4 ">cidade: campo grande</Text>
          <TouchableOpacity className="bg-red-600 shadow-lg shadow-red-500/50 hover:bg-red-900 text-white p-2.5 rounded-xl text-shadow-lg" onPress={() =>{
            window.alert(`⚠️ ERRO INESPERADO ⚠️  
            Algo deu muito errado...

            Código do erro: %$&)*%_(+#)

            Motivo provável:
            - Algo quebrou.
            - Talvez seja culpa sua.
            - Ou talvez o universo decidiu zoar.

            Você será redirecionado para a tela de emergência...
            Segure firme.

            ⌛ Redirecionando...`);

            window.location.href = "https://youtu.be/A7RQMkn3sc0"
          }}>editar perfil</TouchableOpacity>

        </View>
    </View>
  );
}
