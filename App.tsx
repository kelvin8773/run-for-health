import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/screens/Welcome";

const App: React.FC = (): JSX.Element => {
  const [finishIntro, setFinishIntro] = useState(false);

  return (
    <View style={styles.container}>
      {finishIntro ? <Text>Run For Health Started.</Text> : <Welcome />}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
