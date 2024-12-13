import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePage from "../screens/Home";
import ProductPage from "../screens/Product";
import { Text } from "react-native";
import Bell from "../../component/icons/Bell";
import Bill from "../screens/Bill";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "bell" : "home-outline";
              break;
            case "Bill":
              iconName = focused ? "bill" : "bill-outline";
              break;
            case "Profile":
              iconName = focused ? "profile" : "profile-outline";
              break;
            case "Cart":
              iconName = focused ? "cart" : "cart-outline";
              break;
            default:
              iconName = focused ? "home" : "home-outline";
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarActiveBackgroundColor: "#4335A7",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveBackgroundColor: "#D0CCE9",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Bill"
        component={Bill}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = {
  tabBarStyle: {
    backgroundColor: "#D0CCE9",
    borderTopWidth: 0,
    elevation: 0,
    height: 60,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    marginHorizontal: 20,
    borderRadius: 40,
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabBarItemStyle: {
    // paddingVertical: 10,
    margin: 10,
    borderRadius: "40%",
  },
};

export default HomeTabs;
