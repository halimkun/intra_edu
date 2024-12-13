import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Referal from "../../component/icons/Referal";
import ArrowRight from "../../component/icons/ArrowRight";
import Bell from "../../component/icons/Bell";
import "./global.css";

import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Bell from "./component/icons/Bell";
import Referal from "./component/icons/Referal";
import ArrowRight from "./component/icons/ArrowRight";
import Wallet from "./component/icons/Wallet";
import SearchField from "./component/SearchField";
import BestDealSection from "./component/section/BestDealSection";
import CategorySection from "./component/section/CategoriesSection";

export default function HomePage() {
  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <View className="px-4 bg-white">
          <View className="bg-neutral-200 h-[200px] p-2 rounded-b-2xl overflow-hidden flex justify-between relative">
            <View className="mt-14 px-6 flex flex-row justify-between items-center">
              <Text className="text-xl font-black">Hi, Lorem !</Text>
              <View className="flex flex-row gap-3 items-center">
                <TouchableOpacity className="rounded-full px-4 py-2 flex flex-row items-center gap-2 justify-evenly bg-primary-500">
                  <Referal width={16} height={19} />
                  <Text className="text-white">Referral</Text>
                  <ArrowRight width={12} height={12} fill="#fff" />
                </TouchableOpacity>
                <Bell width={16} height={19} />
              </View>
            </View>

            <View className="h-28 bg-primary-500 -bottom-7 rounded-2xl p-4 flex gap-3 border-2 border-indigo-200">
              <View className="flex gap-3 items-center flex-row">
                <Wallet width={16} height={16} />
                <Text className="font-black text-white tracking-wide">
                  Balance
                </Text>
              </View>
              <Text className="text-3xl font-black text-white">₹ 3.456</Text>
            </View>

            <View className="h-28 bg-primary-500 -bottom-7 rounded-2xl p-4 flex gap-3 border-2 border-indigo-200">
              <View className="flex gap-3 items-center flex-row">
                <Wallet width={16} height={16} />
                <Text className="font-black text-white tracking-wide">
                  Balance
                </Text>
              </View>
              <Text className="text-3xl font-black text-white">₹ 3.456</Text>
            </View>
          </View>

          {/* Search Field */}
          <View className="mt-5">
            <SearchField />
          </View>

          {/* Hero Slider */}
          <View className="h-40 rounded-2xl bg-green-400 mt-5"></View>

          {/* Category */}
          <CategorySection />
        </View>

        <View className="py-5 px-4 bg-neutral-200">
          <BestDealSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
