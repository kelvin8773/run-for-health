import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Detail: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Detail Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Detail;
