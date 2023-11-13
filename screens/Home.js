import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
import LottieView from "lottie-react-native";
import Ghost1 from "../assets/ghost1.json";
import Ghost2 from "../assets/ghost2.json";
import amex from "../assets/amex.png";
import diwali1 from "../assets/diwali1.json";
import diwali2 from "../assets/diwali2.json";
import diwali3 from "../assets/diwali3.json";

const ghostArray = [Ghost1, Ghost2, diwali1, diwali2, diwali3];

export default function Home() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,1)"]}
        style={{
          ...styles.background,
          //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel
          //   loop
          width={width}
          height={height * 0.7}
          mode="parallax"
          style={
            {
              // borderColor: "red",
              // borderWidth: 4,
            }
          }
          //   autoPlay={true}
          data={ghostArray}
          pagingEnabled
          scrollAnimationDuration={1000}
          parallaxScrollingOffset={700}
          parallaxScrollingScale={1.2}
          parallaxAdjacentItemScale={1.5}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={(props) => (
            <View
              key={props.index}
              style={{
                width: 400,
                height: 620,
                // backgroundColor: "white",
                //   position: "absolute",
                top: 50,
                //
                // shadowColor: "rgb(48,53,60)",
                // shadowOffset: {
                //   width: 10,
                //   height: 10,
                // },
                // shadowOpacity: 0.6,
                // shadowRadius: 20,
                // elevation: 22,
                // borderRadius: 20,
              }}
            >
              {/* <Text style={{ color: "white" }}>{props}</Text> */}
              <LinearGradient
                // Background Linear Gradient
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 20,
                }}
                colors={["black", "black"]}
              >
                {/* <Image
                  style={{
                    width: 150,
                    height: 80,
                    objectFit: "contain",
                    borderRadius: 10,
                    top: 20,
                    left: 10,
                  }}
                  source={amex}
                /> */}

                <LottieView
                  style={{
                    // top: 100,
                    width: "100%",
                    height: 600,
                  }}
                  source={ghostArray[props.index]}
                  autoPlay
                  loop
                />
              </LinearGradient>
            </View>
          )}
        ></Carousel>
        {/* <Text style={{ color: "white" }}>Hello</Text> */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: 40,
            justifyContent: "Center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: "auto",
              alignItems: "center",
              color: "#D6E1EF",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            दिवाली की हार्दिक शुभकामनाएं!!
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  button: {
    padding: 10,
    color: "white",
    borderRadius: 5,
    zIndex: 3,
    position: "absolute",
  },
  text: {
    color: "white",
  },
});
