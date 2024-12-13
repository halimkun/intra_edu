import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Cart() {
  return (
    <SafeAreaView>
      <ScrollView className="px-4 h-full bg-white">
        <View className=" h-[203px] p-4 mt-10 rounded-b-[16px]">
          <Text>Cart Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
