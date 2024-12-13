import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import TimeCountDown from "../TimeCountDown";
import StarIcon from "../icons/Star";

export default function BestDealSection() {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex gap-1">
        <Text className="font-bold text-primary-500">⏱ Best Deal</Text>
        <Text>Grab your limited incredible deals, now !</Text>
      </View>

      {/* coundown bg red rounded full */}
      <TimeCountDown />

      {/* scrollview horizontal */}
    </View>
  );
}
