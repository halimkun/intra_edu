import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Bell from "../../component/icons/Bell";
import Referal from "../../component/icons/Referal";
import ArrowRight from "../../component/icons/ArrowRight";

export default function ProductPage() {
  return (
    <SafeAreaView>
      <ScrollView className="px-4 h-full bg-white">
        <View className=" h-[203px] p-4 mt-10 rounded-b-[16px]">
          <Text>Product Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
