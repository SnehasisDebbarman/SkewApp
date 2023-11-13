import { View, Text } from "react-native";

import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  vec,
} from "@shopify/react-native-skia";
import { LinearGradient as LG } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

const width = 256;
const height = 256;
export default function DetailsScreen() {
  const r = width / 2;
  return (
    <LG
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingTop: 100,
      }}
      colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,1)"]}
    >
      <View>
        {/* <Canvas style={{ width, height }}>
          <Circle cx={r} cy={r} r={r}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(2 * r, 2 * r)}
              colors={["#00ff87", "#60efff"]}
            />
          </Circle>
          <Group>
            <LinearGradient
              start={vec(2 * r, 2 * r)}
              end={vec(4 * r, 4 * r)}
              colors={["#0061ff", "#60efff"]}
            />
            <Circle cx={3 * r} cy={3 * r} r={r} />
          </Group>
        </Canvas> */}
        <LottieView
          style={{
            left: 0,
            position: "absolute",
            top: -60,
            width: 400,
            height: 500,
          }}
          source={require("../assets/diwali5.json")}
          autoPlay
          loop
        />
        <LottieView
          style={{
            top: 50,
            width: 400,
            height: 500,
          }}
          source={require("../assets/diwali1.json")}
          autoPlay
          loop
        />
        <LottieView
          style={{
            position: "absolute",
            top: 50,
            width: 300,
            height: 500,
          }}
          source={require("../assets/diwali4.json")}
          autoPlay
          loop
        />
        {/* <Text
          style={{
            top: 80,
            width: "auto",
            alignItems: "center",
            color: "#D6E1EF",
            fontSize: 30,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          दिवाली की हार्दिक शुभकामनाएं!!
        </Text> */}
      </View>
    </LG>
  );
}
