import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/screens/Welcome";

const App: React.FC = (): JSX.Element => {
  const [showHomeScreen, setShowHomeScreen] = useState(false);

  const handleDone = () => {
    setShowHomeScreen(!showHomeScreen);
  };

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 200,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
