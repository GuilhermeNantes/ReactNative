import { Stack } from "expo-router";
import './globals.css';
import { Header } from "react-native/Libraries/NewAppScreen";
export default function RootLayout() {
  return <Stack screenOptions={{headerShown:false}}/>;
}
