import { View, Text } from 'react-native'

export default function CategoryItem({
  label
}) {
  return (
    <View className="flex gap-3 items-center">
      <View className="bg-white rounded-full h-16 w-16 shadow-md shadow-neutral-900/75" />
      <Text className="font-bold max-w-[80px] text-center">{label}</Text>
    </View>
  )
}