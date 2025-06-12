import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const logo = require("./img/logo.png");

export default function App() {
  return (
    <View className="flex-1 bg-black items-center justify-center px-6">
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Card de Login */}
      <View className="w-[400px] h-[500px] max-w-sm bg-white/10 p-6 b-4 rounded-lg space-y-4">
        <Text className="text-white text-2xl font-bold ">Entrar</Text>

        <TextInput
          placeholder="Email ou número de telefone"
          placeholderTextColor="#aaa"
          className="bg-white/5 text-white px-4 py-3 rounded"
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          className="bg-white/5 text-white px-4 py-3 rounded"
        />

        <TouchableOpacity className="bg-red-600 py-3 rounded">
          <Text className="text-white text-center font-bold text-base">Entrar</Text>
        </TouchableOpacity>

        {/* Recuperar senha - alinhado à direita */}
        <View className="items-end">
          <TouchableOpacity>
            <Text className="text-gray-400 text-sm underline">Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        {/* Espaço antes de "Novo por aqui?" */}
        <View className="pt-6">
          <Text className="text-gray-400 text-sm text-center">
            Novo por aqui?{" "}
            <Text className="text-white underline">Assine agora</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
