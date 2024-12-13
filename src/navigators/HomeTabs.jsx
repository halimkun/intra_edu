import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePage from "../screens/Home";
import ProductPage from "../screens/Product";
import { Text } from "react-native";
import Bell from "../../component/icons/Bell";
import Bill from "../screens/Bill";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import HomeIcon from "../../component/icons/Home";
import BillIcon from "../../component/icons/Bill";
import ProfileIcon from "../../component/icons/Profile";
import CartIcon from "../../component/icons/Cart";
import { ScreenHome } from "../../App";

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? (
                <HomeIcon width={20} height={20} fill="#32277D" />
              ) : (
                <HomeIcon width={20} height={20} />
              );
              break;
            case "Bill":
              iconName = focused ? (
                <BillIcon width={20} height={20} fill="#32277D" />
              ) : (
                <BillIcon width={20} height={20} />
              );
              break;
            case "Profile":
              iconName = focused ? (
                <ProfileIcon width={20} height={20} fill="#32277D" />
              ) : (
                <ProfileIcon width={20} height={20} />
              );
              break;
            case "Cart":
              iconName = focused ? (
                <CartIcon width={20} height={20} fill="#32277D" />
              ) : (
                <CartIcon width={20} height={20} />
              );
              break;
            default:
              iconName = focused ? (
                <HomeIcon width={20} height={20} fill="#32277D" />
              ) : (
                <HomeIcon width={20} height={20} />
              );
          }
          return iconName;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarIconStyle: {
          width: 40,
          height: 20,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={ScreenHome}
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
    paddingVertical: 14,
    width: 40,
  },
};

export default HomeTabs;
