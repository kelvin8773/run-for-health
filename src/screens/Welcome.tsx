import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "Run For Health",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/Jogging-rafiki.png"),
  },
  {
    key: "two",
    title: "Run with Friends",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/Jogging-amico.png"),
  },
  {
    key: "three",
    title: "Run for relax",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/Jogging-pana.png"),
  },
];

type Item = {
  key: string;
  title: string;
  text: string;
  image: string;
};

type Props = {
  item: Item;
};

const Welcome: React.FC = (): JSX.Element => {
  const renderItem: React.FC<Props> = (props: Props): JSX.Element => {
    const { item }: Props = props;

    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      activeDotStyle={styles.dot}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: "cover",
    height: "73%",
    width: "100%",
  },
  title: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: "bold",
    color: "#21465b",
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    color: "#b5b5b5",
    fontSize: 16,
    paddingHorizontal: 30,
  },
  dot: {
    backgroundColor: "#21465b",
    width: 30,
  },
});

export default Welcome;
