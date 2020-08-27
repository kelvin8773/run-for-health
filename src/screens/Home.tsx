import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
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
        <TouchableOpacity
          style={{
            height: 40,
            width: 50,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Detail")}
        >
          <Text style={{}}>More</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          style={{
            height: 50,
            borderColor: "gray",
            borderWidth: 0.5,
            marginBottom: 20,
            borderRadius: 5,
            paddingHorizontal: 15,
            fontSize: 24,
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
