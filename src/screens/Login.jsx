import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowRight from "../../component/icons/ArrowRight";
import Referal from "../../component/icons/Referal";

export default function LoginPage() {
  return (
    <SafeAreaView>
      <ScrollView className="px-4 h-full bg-white">
        <View className=" h-[203px] p-4 rounded-b-[16px]">
          <Text>Login Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
