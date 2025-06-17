import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useEffect } from "react";



export default function RootLayout() {
  const myTheme={
    ...DarkTheme,
    colors:{
      ...DarkTheme.colors,
      primary: 'red',
    },
  };
  return(
    <ThemeProvider value={myTheme}> 
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  ) 
}
