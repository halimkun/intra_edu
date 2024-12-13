import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Heading({ title1, title2, desc, action, accent }) {
  return (
    <View className="flex flex-row items-baseline justify-between pr-4">
      <View className="flex gap-1 ">
        <View className="flex flex-row items-center gap-1">
          <Text className="font-bold  ">{title1}</Text>
          <Text className="font-bold   text-primary">{title2}</Text>
        </View>
        {desc && <Text className="text-sm">{desc}</Text>}
      </View>
      <TouchableOpacity>
        <Text>{action}</Text>
      </TouchableOpacity>
    </View>
  );
}
