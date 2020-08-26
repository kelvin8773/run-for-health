import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-vector-icons/Ionicons";

const slides = [
  {
    key: "one",
    title: "Run for health",
    text:
      "Running is the most easy adapt sports, and the more you run the healthy you are!",
    image: require("../images/Jogging-rafiki.png"),
  },
  {
    key: "two",
    title: "Run with Friends",
    text: "With pair of running shoe, you can getting start.",
    image: require("../images/Jogging-amico.png"),
  },
  {
    key: "three",
    title: "Run alone with your pet",
    text: "Running alone is the best time for relaxing and thinking.",
    image: require("../images/Jogging-pana.png"),
  },
  {
    key: "four",
    title: "Run indoor",
    text: "Running on treadmill when raining outside.",
    image: require("../images/Workout-pana.png"),
  },
  {
    key: "five",
    title: "Training at home",
    text: "Or just exercising at home & Office.",
    image: require("../images/Training-at-home.png"),
  },
];

interface Props {
  handleDone: () => void;
}

const Welcome: React.FC<Props> = ({ handleDone }): JSX.Element => {
  type Item = {
    key: string;
    title: string;
    text: string;
    image: string;
  };

  type Props = {
    item: Item;
  };

  const renderItem: React.FC<Props> = (props): JSX.Element => {
    const { item }: Props = props;

    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const nextButton = (): JSX.Element => (
    <View style={styles.buttonCircle}>
      <Icon
        name="md-arrow-round-forward"
        color="rgba(255, 255, 255, .9)"
        size={24}
      />
    </View>
  );

  const doneButton = (): JSX.Element => (
    <View style={styles.buttonCircle}>
      <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
    </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      activeDotStyle={styles.dot}
      renderDoneButton={doneButton}
      renderNextButton={nextButton}
      onDone={handleDone}
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
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
