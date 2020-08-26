import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import {
  RobotoSlab_200ExtraLight,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto-slab";

import Welcome from "./src/screens/Welcome";

const App: React.FC = (): JSX.Element => {
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  let [fontsLoaded] = useFonts({
    RobotoSlab_200ExtraLight,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold,
  });

  const handleDone = () => {
    setShowHomeScreen(!showHomeScreen);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        {showHomeScreen ? (
          <Text style={styles.text}>Run For Health</Text>
        ) : (
          <Welcome handleDone={handleDone} />
        )}

        <StatusBar style="auto" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 200,
    fontFamily: "RobotoSlab_700Bold",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
