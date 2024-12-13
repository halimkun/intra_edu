import "./global.css";

import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bell from "./component/icons/Bell";
import Referal from "./component/icons/Referal";
import ArrowRight from "./component/icons/ArrowRight";
import { StatusBar } from "expo-status-bar";
import HomePage from "./src/screens/Home";
import ProductPage from "./src/screens/Product";
import HomeTabs from "./src/navigators/HomeTabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
