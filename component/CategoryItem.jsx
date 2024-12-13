import { View, Text } from "react-native";

export default function CategoryItem({ icon, label }) {
  return (
    <View className="flex gap-3 items-center">
      <Text className="font-bold max-w-[80px] text-center">{label}</Text>
    </View>
  );
}
