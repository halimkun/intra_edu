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

export default function HomePage() {
  return (
    <SafeAreaView>
      <ScrollView className="px-4 h-full bg-white">
        <View className="bg-red-400 h-[203px] p-4 rounded-b-[16px]">
          <View className="mt-8 px-6 flex flex-row justify-between items-center">
            <Text className="text-xl font-black">Hi, Lorem !</Text>
            <View className="flex flex-row gap-3 items-center">
              {/* button rounded full with icons */}
              <TouchableOpacity className="rounded-full px-3 py-2 flex flex-row items-center gap-2 bg-primary-500">
                <Referal width={16} height={19} />
                <Text className="text-white">Referral</Text>
                <ArrowRight width={12} height={12} fill="#fff" />
              </TouchableOpacity>
              {/* bell icon */}
              <Bell width={17} height={20} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
