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
      }}
      colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,1)"]}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
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
            top: 150,
            width: 400,
            height: 400,
          }}
          source={require("../assets/ghost1.json")}
          autoPlay
          loop
        />
      </View>
    </LG>
  );
}
