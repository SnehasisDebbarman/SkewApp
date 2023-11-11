import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import HomeIcon from "./assets/home.png";

import Home from "./screens/Home";
import DetailsScreen from "./screens/DetailsScreen";

import { TouchableOpacity } from "react-native";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        paddingHorizontal: 30,
        backgroundColor: "black",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <LinearGradient
              // Background Linear Gradient
              locations={[0.5, 0.8]}
              style={{
                height: "auto",
                width: "auto",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
              colors={
                isFocused
                  ? ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.1)"]
                  : ["transparent", "transparent"]
              }
            >
              {/* <Text
                style={{
                  color: isFocused ? "#673ab7" : "#888",
                  textAlign: "center",
                }}
              >
                {label}
              </Text> */}
              <Image style={{ width: 30, height: 30 }} source={HomeIcon} />
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer style={{ backgroundColor: "black" }}>
      <Tab.Navigator
        style={{ backgroundColor: "black" }}
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
