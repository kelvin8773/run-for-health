import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
} from "react-native";

type Props = {
  navigation: any;
};

const Home: React.FC<Props> = (props): JSX.Element => {
  const { navigation } = props;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text style={{}}>Home</Text>
        <Text style={{}}>Back</Text>
      </View>

      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 20,
            borderRadius: 5,
          }}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Detail")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default Home;
